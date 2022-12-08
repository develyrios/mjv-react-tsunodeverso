import { Card } from '../../components/Card';
import { Section } from './styles';
import { FormEvent, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../styles/Button';
import { InfiniteScroll } from '../../components/InfiniteScrool';

import axios from 'axios';

interface  IUser {
    name: string;
    surname: string;
    title: string;
    avatar: string;
    avatarUrl: string;
}

export interface IProject {
    id: string;
    title: string;
    description: string;
    link: string;
    aditionalLink: string;
    thumb: string;
    thumbUrl: string;
    createdAt: Date;
    updatedAt: Date;
    elapsedTime: string;
    user: IUser;
}

export const Dashboard = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [inputSearch, setInputSearch] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        const { CancelToken } = axios;
        const source = CancelToken.source();

        api.get<IProject[]>('/projects', {
            params: {
                page,
                pageSize: 10,
                q: search
            },
            cancelToken: source.token
        })
        .then(response => {
            if(search && page === 1) {
                setProjects(response.data)
            }else {
                setProjects((oldProjects) => [...oldProjects, ...response.data])
            }
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false))

        return () => {
            source.cancel();
        }
    }, [page])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setSearch(inputSearch);
        setPage(1);
    }

    return(
        <main>
            <Header>
                <form onSubmit={handleSubmit}>
                    <Input 
                        label='Procurar por projetos...' 
                        name='project' 
                        id='project'
                        onChange={event => setInputSearch(event.target.value)}
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

                <InfiniteScroll 
                    loading={loading} 
                    callback={() => setPage((oldPage) => oldPage + 1)} 
                />
            </Section>
        </main>
    )
}