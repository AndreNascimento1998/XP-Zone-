import useUserContext from "@/context/UserContext/useUserContext.ts"
import {useEffect, useState} from "react"
import Game from "@/types/Game.ts"

const useHome = () => {
    const { getAllGames } = useUserContext()
    const [gamesHighlight, setGamesHighlight] = useState<Game[]>([])
    const [gamesXbox, setGamesXbox] = useState<Game[]>([])
    const [ gamesPs, setGamesPs ] = useState<Game[]>([])
    const [ gamesNintendo, setGamesNintendo ] = useState<Game[]>([])
    const usersMock = [
        {
            name: 'John Doe',
            email: 'adsadsa@dsadsa',
            platform: ['ps4', 'xone', 'switch', 'xseries' ],
            games: [
                {
                    name: 'FIFA 22',
                    platform: ['ps4' ],
                    src: 'fifa'
                },
                {
                    name: 'Demon Souls',
                    platform: ['switch', 'xseries' ],
                    src: 'demon-souls'
                }
            ]
        },
        {
            name: 'John Doe',
            email: 'adsadsa@dsadsa',
            platform: ['ps4', 'xone', 'switch', 'xseries' ],
            games: [
                {
                    name: 'FIFA 22',
                    platform: ['ps4' ],
                    src: 'fifa'
                },
                {
                    name: 'Demon Souls',
                    platform: ['switch', 'xseries' ],
                    src: 'demon-souls'
                }
            ]
        },
        {
            name: 'John Doe',
            email: 'adsadsa@dsadsa',
            platform: ['ps4', 'xone', 'switch', 'xseries' ],
            games: [
                {
                    name: 'FIFA 22',
                    platform: ['ps4' ],
                    src: 'fifa'
                },
                {
                    name: 'Demon Souls',
                    platform: ['switch', 'xseries' ],
                    src: 'demon-souls'
                }
            ]
        },
        {
            name: 'John Doe',
            email: 'adsadsa@dsadsa',
            platform: ['ps4', 'xone', 'switch', 'xseries' ],
            games: [
                {
                    name: 'FIFA 22',
                    platform: ['ps4' ],
                    src: 'fifa'
                },
                {
                    name: 'Demon Souls',
                    platform: ['switch', 'xseries' ],
                    src: 'demon-souls'
                }
            ]
        },
        {
            name: 'John Doe',
            email: 'adsadsa@dsadsa',
            platform: ['ps4', 'xone', 'switch', 'xseries' ],
            games: [
                {
                    name: 'FIFA 22',
                    platform: ['ps4' ],
                    src: 'fifa'
                },
                {
                    name: 'Demon Souls',
                    platform: ['switch', 'xseries' ],
                    src: 'demon-souls'
                }
            ]
        },
        {
            name: 'John Doe',
            email: 'adsadsa@dsadsa',
            platform: ['ps4', 'xone', 'switch', 'xseries' ],
            games: [
                {
                    name: 'FIFA 22',
                    platform: ['ps4' ],
                    src: 'uncharted4',
                    highlight: false
                },
                {
                    name: 'Demon Souls',
                    platform: ['ps5'],
                    src: 'demon-souls',
                    highlight: true
                }
            ]
        }
    ]
    const games = getAllGames()

    const gameHighlight = (): Game[] => {
        return games.filter((game: Game) => game && game.highlight);
    }

    const gameXbox = (): Game[] => {
        const platforms = ['xone', 'xseries', 'x360'];
        return games.filter((game: Game) => game && platforms.some(platform => game.platform.includes(platform)));
    }

    const gamePs = (): Game[] => {
        const platforms = ['ps4', 'ps5', 'ps3'];
        return games.filter((game: Game) => game && platforms.some(platform => game.platform.includes(platform)));
    }

    const gameNintendo = (): Game[] => {
        const platforms = ['switch'];
        return games.filter((game: Game) => game && platforms.some(platform => game.platform.includes(platform)));
    }

    useEffect(() => {
        setGamesHighlight(gameHighlight())
        setGamesXbox(gameXbox())
        setGamesPs(gamePs())
        setGamesNintendo(gameNintendo())
    }, []);

    return {
        usersMock,
        gamesHighlight,
        gamesXbox,
        gamesPs,
        gamesNintendo
    }
}

export default useHome