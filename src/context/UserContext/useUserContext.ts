import {createContext, useState} from "react";

interface UserContextType {
    user: string
}

const useUserContext = () => {
    const UserContext = createContext<UserContextType | undefined>(undefined)
    const [user, setUser] =  useState()

    return {
        UserContext,
        user
    }
}

export default useUserContext