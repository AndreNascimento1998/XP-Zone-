import { createContext } from 'react'
import User from '@/types/User.ts'
import Game from '@/types/Game.ts'

interface UsersContextType {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
    users: User[]
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
    favoriteItem: string[]
    setFavoriteItem: React.Dispatch<React.SetStateAction<string | string[]>>
    getAllGames: () => Game[]
    setFavorite: (item: string | number) => void
    getGamesById: (id: string | number) => Game | null
}

const UsersContext = createContext<UsersContextType | undefined>(undefined)

export default UsersContext
