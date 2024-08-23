import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import UserHook from "@/mocks/UserHook.ts";
import User from "../../types/User.ts";
import Game from "../../types/Game.ts";

interface UserContextType {
    user: string;
    setUser: Dispatch<SetStateAction<string | undefined>>;
    users: User[];
    setUsers: Dispatch<SetStateAction<User[]>>;
    games: Game[];
    setGames: Dispatch<SetStateAction<Game[]>>;
}

const useUserContext = () => {
    const { resolveMock, getAll } = UserHook();
    const UserContext = createContext<UserContextType | undefined>(undefined);
    const [user, setUser] = useState(resolveMock(localStorage.getItem('id')) || null);
    const [users, setUsers] = useState<User[]>(getAll());

    const getAllGames = (): Game[] => {
        if (users) {
            return users.flatMap(user => user.games);
        }
    }

    return {
        UserContext,
        user,
        users,
        setUser,
        setUsers,
        getAllGames
    };
};

export default useUserContext;