import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { IUserIdContext } from './types';

export const UserIdContext = createContext<IUserIdContext | undefined>(undefined);

function UserIdProvider({ children }: { children: ReactNode }) {
    const [userId, setUserId] = useState('')

    async function handleResetUserId() {
        localStorage.removeItem(`@kidsTasker:userId`);
        setUserId('');
    }

    useEffect(() => {
        const storedUserId = (localStorage.getItem(`@kidsTasker:userId`) || '');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(`@kidsTasker:userId`, JSON.stringify(userId));
    }, [userId])

    return (
        <UserIdContext.Provider value={{
            userId,
            setUserId,
            handleResetUserId,
        }}>
            { children }
        </UserIdContext.Provider>
    )
}

function useUserId(): IUserIdContext {
    const context = useContext(UserIdContext);
    if (context === undefined) {
        throw new Error('O contexto "useUserId" deve ser usado dentro de um UserIdProvider');
    }
    return context;
}

export { UserIdProvider, useUserId };