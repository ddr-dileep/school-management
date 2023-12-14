import { useState } from "react";
import { AppButton, AppForm, AppHeading, Loader } from "../../components";
import { formConstants } from "../../utils/constants";
import "./auth.scss";
import { useDispatch } from "react-redux";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { AuthPage } from "./AuthPage";
import authApiServices from "../../redux/services/authServices";

export const LoginPage = () => {
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLoginFormSubmit = () => {
    setIsLoading(true);
    dispatch(authApiServices.login(formValues));
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <AuthPage>
        <AppHeading title="Welcome back" className="auth-page-form-heading" />
        <AppForm
          inputFields={formConstants.loginFields}
          onInputChange={onInputChange}
        />
        <AppButton
          className="my-2 d-block"
          buttonText="Login"
          onClick={onLoginFormSubmit}
          isDisabled={isLoading}
        >
          Login
        </AppButton>
        <Link to="/forgot-password">Forgot password</Link>
        <Divider className="my-3" />
        <span>
          Do not have any account? <Link to="/register">Register</Link>{" "}
        </span>
      </AuthPage>
    </>
  );
};
