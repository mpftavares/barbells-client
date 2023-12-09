import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js';

export function Logout() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        async function handleLogout() {
            await logout();
            navigate('/login');
        }

        handleLogout();
    }, [logout, navigate]);

    return null;
}