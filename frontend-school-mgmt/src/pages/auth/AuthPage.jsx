import { Assets } from "../../utils/Assets";

// eslint-disable-next-line react/prop-types
export const AuthPage = ({ children }) => {
  return (
    <div className="auth-page">
      <div className="auth-page-image">
        <img
          src={Assets.authBackground}
          className="auth-page-image-img"
          alt="auth-page"
        />
      </div>
      <div className="auth-page-form">{children}</div>
    </div>
  );
};
