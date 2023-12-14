import { Link } from "react-router-dom";
import { AppButton, AppForm, AppHeading, Loader } from "../../components";
import { formConstants } from "../../utils/constants";
import { Divider } from "@mui/material";
import { useState } from "react";
import { AuthPage } from "./AuthPage";
import { useDispatch } from "react-redux";
import authApiServices from "../../redux/services/authServices";

export const RegisterPage = () => {
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onRegisterFormSubmit = () => {
    setIsLoading(true);
    const d = dispatch(authApiServices.register(formValues));
    console.log("Register', registration", d);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && <Loader />}
      <AuthPage>
        <AppHeading title="Register here" className="auth-page-form-heading" />
        <AppForm
          inputFields={formConstants.registerFields}
          onInputChange={onInputChange}
        />
        <AppButton
          className="my-2 d-block"
          buttonText="Register"
          onClick={onRegisterFormSubmit}
          isDisabled={isLoading}
        >
          Register
        </AppButton>
        <Divider className="my-3" />
        <div className="login-page-form">
          <span>Already have an account?</span>
          <Link to="/login"> Login</Link>
        </div>
      </AuthPage>
    </>
  );
};
