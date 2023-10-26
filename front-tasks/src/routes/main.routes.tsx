import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login/login.pages";
import Register from "../pages/Register/register.pages";
import Task from "../pages/Tasks/tasks.pages";
import PrivateRoute from "./privateRoute.routes";

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/tasks"
        element={
          <PrivateRoute redirectTo="/">
            <Task />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
