import Game from "@/types/Game.ts";
import useGameFilterPlatform from "@/hooks/useGameFilterPlatform.ts"

const useLibrary = (games: Game[]) => {

    const { filterPlatform } = useGameFilterPlatform()
    const xboxGames: Game[] = filterPlatform(games, ['xone', 'xseries', 'x360'])
    const psGames: Game[] = filterPlatform(games, ['ps4', 'ps5', 'ps3'])
    const ninGames: Game[] = filterPlatform(games, ['switch', 'wiiu', 'wii'])

    return {
        xboxGames,
        psGames,
        ninGames
    }
}

export default useLibrary
