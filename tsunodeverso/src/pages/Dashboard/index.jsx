import { Card } from '../../components/Card';

import { Section } from './styles';

import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../styles/Button';
import { InfiniteScroll } from '../../components/InfiniteScrool';


export const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    const [page, setPage] = useState(1);

    const [search, setSearch] = useState('');
    
    const [project, setProject] = useState('');
    
    useEffect(() => {
        api.get('/projects', {
            params: {
                page,
                pageSize: 5,
                q: search
            }
        }).then(response => {
            if(search && page === 1) {
                setProjects(response.data)
            }else {
                setProjects((oldProjects) => [...oldProjects, ...response.data])
            }
        })
        .catch(error => console.error(error));
    }, [page, search])

    function handleSubmit(event) {
        event.preventDefault();

        setSearch(event.target.project.value);
        setPage(1);
    }

    return(
        <main>
            <Header>
                <form onSubmit={handleSubmit}>
                    <Input label='Procurar por projetos...' 
                        name='project' 
                        id='project'
                    />
                </form>

                <Button variant='primary'>Novo projeto</Button>
            </Header>

            <Section>
                <ul>
                    {
                        projects.map(project => 
                            <Card 
                                key={project.id} 
                                {...project} 
                            />
                        )
                    }
                </ul>
                <InfiniteScroll callback={() => setPage((oldPage) =>oldPage + 1)} />
            </Section>
        </main>
    )
}