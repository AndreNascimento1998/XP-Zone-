import Game from "@/types/Game.ts";

interface User {
    id?: number
    name: string
    email: string
    games: Game[]
}

export default User