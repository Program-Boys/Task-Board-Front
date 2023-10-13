import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login/login.pages";
import Register from "../pages/Register/register.pages";

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={"App started"} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
