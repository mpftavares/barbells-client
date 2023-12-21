import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
  element: ReactElement;
}

export function PrivateRoute({ element }: PrivateRouteProps) {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? element : <Navigate to="/login" />;
}