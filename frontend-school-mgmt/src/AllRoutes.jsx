import { Route, Routes } from "react-router-dom";
import { ContactUs, HomePage, LoginPage } from "./pages";
import { About } from "./pages/about";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={<RegisterPage />} /> */}
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};
