import {createContext, Dispatch, SetStateAction, useState} from "react";
import UserHook from "../../mocks/UserHook.ts";

interface UserContextType {
    user: string
    setUser: Dispatch<SetStateAction<string | undefined>>
}

const useUserContext = () => {
    const { resolveMock } = UserHook()
    const UserContext = createContext<UserContextType | undefined>(undefined)
    const [user, setUser] =  useState( resolveMock(localStorage.getItem('id')) || null)

    return {
        UserContext,
        setUser,
        user
    }
}

export default useUserContext