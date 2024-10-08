import DashboardIcon from '@/assets/Icons/Header/DashboardIcon.tsx'
import LibraryIcon from '@/assets/Icons/Header/LibraryIcon.tsx'
import FavoriteIcon from '@/assets/Icons/Header/FavoriteIcon.tsx'
import ExitIcon from '@/assets/Icons/Header/ExitIcon.tsx'
import useAuth from '@/hooks/useAuth.ts'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@/assets/Icons/Header/HomeIcon.tsx'

const useHeader = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const itemsNotification = [
        { name: 'um', callback: () => console.log('um') },
        { name: 'dois', callback: () => console.log('dois') },
    ]

    const items = [
        { name: 'Página Inicial', component: HomeIcon, callback: () => routeGeneric('/') },
        { name: 'Dashboard', component: DashboardIcon, callback: () => routeGeneric('/dashboard') },
        { name: 'Biblioteca', component: LibraryIcon, callback: () => routeGeneric('/library') },
        { name: 'Favoritos', component: FavoriteIcon, callback: () => routeGeneric('/favorites') },
        { name: 'Sair', component: ExitIcon, callback: () => lougoutUser() },
    ]

    const lougoutUser = () => {
        logout()
        navigate('/landing-page')
    }

    const routeGeneric = (route: string) => {
        navigate(route)
    }

    return {
        itemsNotification,
        items,
    }
}

export default useHeader
