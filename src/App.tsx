import { Outlet, useNavigate } from 'react-router-dom'
import '@/styles/global.scss'
import Header from '@/pages/Header/Index'
import UserProvider from '@/context/UserContext/UserProvider'
import { createContext, useEffect } from 'react'
import useUserContext from './context/UserContext/useUserContext'
import UsersProvider from './context/UsersContext/UsersProvider.tsx'

export const AppContext = createContext(null)

function App() {
    const navigate = useNavigate()
    const { user } = useUserContext()

    useEffect(() => {
        if (!user) {
            navigate('/landing-page')
        }
    }, [navigate, user])

    return (
        <UsersProvider>
            <div className={'4xl:px-[20rem]'}>
                <UserProvider>
                    <Header />
                    <Outlet />
                </UserProvider>
            </div>
        </UsersProvider>
    )
}

export default App
