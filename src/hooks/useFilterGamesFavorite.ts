import { useContext } from 'react'
import UsersContext from '@/context/UsersContext/UsersContext.ts'

const useFilterGamesFavorite = () => {
    const { getAllGames } = useContext(UsersContext)

    const filterGames = (item: string[] = []) => {
        return getAllGames().filter((game) => item.includes(game.id.toString()))
    }

    return { filterGames }
}

export default useFilterGamesFavorite
