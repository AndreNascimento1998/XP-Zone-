import {createContext, useState} from "react";

interface UserContextType {
    user: string
    setUser: (user: string) => void
}

const useUserContext = () => {
    const UserContext = createContext<UserContextType | undefined>(undefined)
    const [user, setUser] =  useState()

    return {
        UserContext,
        user,
        setUser,
    }
}

export default useUserContext