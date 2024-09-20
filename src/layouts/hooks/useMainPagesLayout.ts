import useUsersContext from '@/context/UsersContext/useUsersContext'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const useMainPagesLayout = () => {
    const { user } = useUsersContext()
    const location = useLocation()
    const [routeName, setRouteName] = useState(location.pathname.split('/')[1])

    const description =
        'Olá, jogadores! Minhas regras são básicas, para garantir uma boa prática de troca e venda. Meus jogos são seminovos e estou disposta a trocar pelos jogos que tenho interesse. A primeira regra é que não aceito jogos com danificação seja da mais pequena, não aceito entregas pelas mãos de terceiros e tenho preferência em me comunicar com o dono do jogo que já jogou e sabe me passa as devidas informações.'

    const itemsTabs = [
        {
            name: 'Dashboard',
            nameRoute: 'dashboard',
        },
        {
            name: 'Biblioteca',
            nameRoute: 'library',
        },
        {
            name: 'Favoritos',
            nameRoute: 'favorites',
        },
    ]

    const parsedRoute = () => {
        setRouteName(location.pathname.split('/')[1])
    }

    useEffect(() => {
        parsedRoute()
    }, [location.pathname])

    return {
        description,
        user,
        itemsTabs,
        routeName,
    }
}

export default useMainPagesLayout
