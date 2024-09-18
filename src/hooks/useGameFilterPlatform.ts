import Game from '@/types/Game.ts'
const useGameFilterPlatform = () => {
    const filterPlatform = (games: Game[], platform: string[]): Game[] => {
        console.log(games)
        return games.filter((game) => game && platform.some((p) => game.platform.includes(p)))
    }

    return {
        filterPlatform,
    }
}

export default useGameFilterPlatform
