import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/Auth';

interface PrivateRoutesProps {
  component: JSX.Element;
}

export default function PrivateRoute({ component }: PrivateRoutesProps) {
  const { isAuthenticate } = useAuth();
  return isAuthenticate() ? component : <Navigate to="/" replace />;
}
