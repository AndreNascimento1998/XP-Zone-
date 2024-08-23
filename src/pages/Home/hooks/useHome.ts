import useUserContext from "@/context/UserContext/useUserContext.ts"
import {useEffect, useState} from "react"
import Game from "@/types/Game.ts"

const useHome = () => {
    const { getAllGames, users } = useUserContext()
    const [gamesHighlight, setGamesHighlight] = useState<Game[]>([])
    const [gamesXbox, setGamesXbox] = useState<Game[]>([])
    const [ gamesPs, setGamesPs ] = useState<Game[]>([])
    const [ gamesNintendo, setGamesNintendo ] = useState<Game[]>([])
    const games = getAllGames()

    const gameHighlight = (): Game[] => {
        return games.filter((game: Game) => game && game.highlight);
    }

    const setGames = (platforms: string[]): Game[] => {
        return games.filter((game: Game) => game && platforms.some(platform => game.platform.includes(platform)));
    }

    const gameXbox = (): Game[] => {
        const platforms = ['xone', 'xseries', 'x360'];
        return setGames(platforms)
    }

    const gamePs = (): Game[] => {
        const platforms = ['ps4', 'ps5', 'ps3'];
        return  setGames(platforms)
    }

    const gameNintendo = (): Game[] => {
        const platforms = ['switch'];
        return setGames(platforms)
    }

    useEffect(() => {
        setGamesHighlight(gameHighlight())
        setGamesXbox(gameXbox())
        setGamesPs(gamePs())
        setGamesNintendo(gameNintendo())
    }, []);

    return {
        users,
        gamesHighlight,
        gamesXbox,
        gamesPs,
        gamesNintendo
    }
}

export default useHome