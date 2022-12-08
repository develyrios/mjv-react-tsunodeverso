import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Register } from '../pages/Register'

export const RoutesMain = () => (
    <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/singup' element={ <Register /> } />
        <Route path='/dashboard' element={ <Dashboard/> } />

        <Route path='*' element={ <NotFound /> } />
    </Routes>
)