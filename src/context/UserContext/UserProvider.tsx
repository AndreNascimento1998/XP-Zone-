import useUserContext from "@/context/UserContext/useUserContext.ts"

interface UserProviderProps {
    children: React.ReactNode
}

const UserProvider = ({children}: UserProviderProps) => {
    const {user, UserContext} = useUserContext()

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider