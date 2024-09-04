import { createContext } from 'react'

interface UsersContextType {
    //users: User[]
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    //favoriteItem: string | string[]
    //setFavoriteItem: React.Dispatch<React.SetStateAction<string | string[]>>
}

const UsersContext = createContext<UsersContextType | undefined>(undefined)

export default UsersContext
