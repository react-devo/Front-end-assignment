import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user } = {user :'sdfsdfdfafdsa'};
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export const Protected = ({ children }) => {
  const { user } = {user :'sdgdfgd'};
  if (user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};