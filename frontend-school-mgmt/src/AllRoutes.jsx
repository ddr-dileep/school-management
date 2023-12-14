import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { About } from "./pages/about";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
