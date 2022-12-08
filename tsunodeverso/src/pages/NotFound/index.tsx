import { Main } from '../../styles/Main'
import { Link } from '../../styles/Button'
import logoTsunodeVerso from '../../assets/tsunodeverso.svg'

export const NotFound = () => {
    return(
        <Main>
            <img src={logoTsunodeVerso} alt='Logo Tsunode Verso' />
            <h1>Página não encontrada</h1>
            <h2>404</h2>
            
            <Link to='/' variant='primary'>
                Ir para Login
            </Link>
        </Main>
    )
}