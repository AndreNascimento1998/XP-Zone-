import DashboardIcon from '@/assets/Icons/Header/DashboardIcon.tsx'
import MyDataIcon from '@/assets/Icons/Header/MyDataIcon.tsx'
import LibraryIcon from '@/assets/Icons/Header/LibraryIcon.tsx'
import FavoriteIcon from '@/assets/Icons/Header/FavoriteIcon.tsx'
import ExitIcon from '@/assets/Icons/Header/ExitIcon.tsx'
import useAuth from '@/hooks/useAuth.ts'
import { useNavigate } from 'react-router-dom'

const useHeader = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const itemsNotification = [
        { name: 'um', callback: () => console.log('um') },
        { name: 'dois', callback: () => console.log('dois') },
    ]

    const items = [
        { name: 'Dashboard', component: DashboardIcon, callback: () => console.log('um') },
        { name: 'Meus dados', component: MyDataIcon, callback: () => console.log('dois') },
        { name: 'Biblioteca', component: LibraryIcon, callback: () => console.log('dois') },
        { name: 'Favoritos', component: FavoriteIcon, callback: () => console.log('dois') },
        { name: 'Sair', component: ExitIcon, callback: () => lougoutUser() },
    ]

    const lougoutUser = () => {
        logout()
        navigate('/landing-page')
    }

    return {
        itemsNotification,
        items,
    }
}

export default useHeader
