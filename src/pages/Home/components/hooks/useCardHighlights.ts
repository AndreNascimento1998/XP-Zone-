import Game from "@/types/Game.ts"

const useCardHighlights = () => {
    const handleClick = (game: Game) => {
        console.log(game)
    }

    const favoriteItemFunction = (game: Game) => {
        console.log(game)
    }

    return {
        handleClick,
        favoriteItemFunction
    }
}

export default useCardHighlights
