import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios.js";
import { User } from "../models/user.js";

interface AuthContextData {
    isLoggedIn: boolean
    user: User | undefined
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

const tokenKey = '@barbells:token-1.0.0'

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User | undefined>()
    const [token, setToken] = useState<string | undefined>(() => {
        return localStorage.getItem(tokenKey) || undefined;
    })

    useEffect(() => {
        if (token) {
            api.get('/me')
                .then(({ data }) => setUser(data))
        }
    }, [token])

    async function login(email: string, password: string) {
        const { data } = await api.post('/login', { email, password });

        if (data) {
            setToken(data.token);
            localStorage.setItem(tokenKey, data.token);
        }
    }

    async function logout() {
        await api.post('/logout')
        localStorage.removeItem(tokenKey)
        setUser(undefined)
        setToken(undefined)
    }

    return (
        <AuthContext.Provider value={{
            user,
            isLoggedIn: !!token,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext)
}
