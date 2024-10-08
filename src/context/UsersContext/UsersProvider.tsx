import { useState } from 'react'
import UsersContext from './UsersContext.ts'
import User from '@/types/User.ts'
import Game from '@/types/Game.ts'
import UserHook from '@/mocks/UserHook.ts'

interface UsersProviderProps {
    children: React.ReactNode
}

const UsersProvider = ({ children }: UsersProviderProps) => {
    const { resolveMock, getAll } = UserHook()
    const [user, setUser] = useState<User | null>(resolveMock(localStorage.getItem('id')) || null)
    const [users, setUsers] = useState<User[]>(getAll())
    const [favoriteItem, setFavoriteItem] = useState<string[]>(() => {
        const storedFavorite = localStorage.getItem('favorite')
        return storedFavorite ? JSON.parse(storedFavorite) : []
    })

    const getAllGames = (): Game[] => {
        if (users) {
            return users.filter((u) => u.id !== user?.id).flatMap((u) => u.games)
        }
        return []
    }

    const getGamesById = (id: string | number): Game | null => {
        if (user) {
            users.forEach((u) => {
                if (u.id === user.id) {
                    return user.games.find((game) => game.id == id)
                }
            })
        }

        if (users) {
            for (const u of users) {
                if (u.id !== user?.id) {
                    const game = u.games.find((game) => game.id == id)
                    if (game) {
                        return game
                    }
                }
            }
        }
        return null
    }

    const verifyFavorite = (id: string | number) => {
        return Array.isArray(favoriteItem) && favoriteItem.includes(id.toString())
    }

    const setFavorite = (id: string | number) => {
        setFavoriteItem((prevValue) => {
            const updatedFavorites = verifyFavorite(id)
                ? prevValue.filter((value) => value !== id.toString())
                : [...prevValue, id.toString()]
            localStorage.setItem('favorite', JSON.stringify(updatedFavorites))
            return updatedFavorites
        })
    }

    return (
        <UsersContext.Provider
            value={{
                user,
                setUser,
                users,
                setUsers,
                favoriteItem,
                setFavoriteItem,
                getAllGames,
                setFavorite,
                getGamesById,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider
