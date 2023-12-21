import { useAuth } from '../contexts/AuthContext.js';
import { useEffect } from 'react';

export function Logout() {
    const { logout } = useAuth();

    useEffect(() => {
            logout();
    }, []);

    return null;
}
