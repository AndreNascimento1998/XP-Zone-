import Game from "@/types/Game.ts"
import UsersContext from "@/context/UsersContext/UsersContext.ts";
import {useContext} from "react";

const useCardHighlights = () => {
    const { setFavorite, favoriteItem } = useContext(UsersContext);

    const handleClick = (game: Game) => {
        console.log(game)
    }

    const favoriteItemFunction = (game: Game) => {
        setFavorite(game.id)
    }

    const verifyFavorite= (id: string | number) => {
        return Array.isArray(favoriteItem) && favoriteItem.includes(id.toString());
    }

    return {
        handleClick,
        favoriteItemFunction,
        verifyFavorite
    }
}

export default useCardHighlights
