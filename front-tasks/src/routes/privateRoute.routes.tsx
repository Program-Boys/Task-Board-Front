import { Navigate } from "react-router-dom";

interface IPrivate {
  children: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo }: IPrivate) => {
  const isAuthenticated = localStorage.getItem("session") !== null;

  return <>{isAuthenticated ? children : <Navigate to={redirectTo} />}</>;
};

export default PrivateRoute;
