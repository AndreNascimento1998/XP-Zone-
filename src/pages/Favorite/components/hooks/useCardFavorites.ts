import { useContext } from 'react'
import UsersContext from '@/context/UsersContext/UsersContext.ts'
import useFilterGamesFavorite from '@/hooks/useFilterGamesFavorite.ts'
import Game from '@/types/Game.ts'
const useCardFavorites = () => {
    const { setFavorite } = useContext(UsersContext)
    const { favoriteItem } = useContext(UsersContext)
    const { filterGames } = useFilterGamesFavorite()
    const gamesFavorite = filterGames(favoriteItem)

    const favoriteItemFunction = (game: Game) => {
        setFavorite(game.id)
    }

    const verifyFavorite = (id: string | number) => {
        return Array.isArray(favoriteItem) && favoriteItem.includes(id.toString())
    }

    return {
        gamesFavorite,
        favoriteItemFunction,
        verifyFavorite,
    }
}

export default useCardFavorites
