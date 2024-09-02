import useUserContext from '@/context/UserContext/useUserContext'

interface UserProviderProps {
    children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
    const { user, setUser, users, setUsers, UserContext, favoriteItem, setFavoriteItem } = useUserContext()

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            users,
            setUsers,
            UserContext,
            favoriteItem,
            setFavoriteItem
        }}>{children}</UserContext.Provider>
    )
}

export default UserProvider
