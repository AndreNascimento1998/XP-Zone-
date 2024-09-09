import { useState } from 'react';
import UsersContext from './UsersContext.tsx';
import User from '@/types/User.ts';
import Game from '@/types/Game.ts';
import UserHook from '@/mocks/UserHook.ts';

interface UsersProviderProps {
    children: React.ReactNode;
}

const UsersProvider = ({ children }: UsersProviderProps) => {
    const { resolveMock, getAll } = UserHook();
    const [user, setUser] = useState<User | null>(resolveMock(localStorage.getItem('id')) || null);
    const [users, setUsers] = useState<User[]>(getAll());
    const [favoriteItem, setFavoriteItem] = useState<string | string[]>(localStorage.getItem('favorite') || []);

    const getAllGames = (): Game[] => {
        if (users) {
            return users.filter((u) => u.id !== user?.id).flatMap((u) => u.games);
        }
        return [];
    };

    const setFavorite = (item: string | string[]) => {
        setFavoriteItem(item);
    };

    return (
        <UsersContext.Provider value={{
            user,
            setUser,
            users,
            setUsers,
            favoriteItem,
            setFavoriteItem,
            getAllGames,
            setFavorite
        }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;
