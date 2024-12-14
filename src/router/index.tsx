import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../auth/register/view";
import LoginPage from "../auth/login/view";
import AuthLayout from "../layouts/authLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
