import { Outlet, useNavigate } from 'react-router-dom'
import '@/styles/global.scss'
import Header from '@/pages/Header/Index'
import UserProvider from '@/context/UserContext/UserProvider'
import { useEffect } from 'react'
import useUserContext from './context/UserContext/useUserContext'

function App() {
    const navigate = useNavigate()
    const { user, favoriteItem } = useUserContext()

    useEffect(() => {
        if (!user) {
            navigate('/landing-page')
        }
    }, [navigate, user])

    return (
        <div className={'4xl:px-[20rem]'}>
            <UserProvider>
                {favoriteItem}dsds
                <Header />
                <Outlet />
            </UserProvider>
        </div>
    )
}

export default App
