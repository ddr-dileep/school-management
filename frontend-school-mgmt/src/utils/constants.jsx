export const formConstants = {
  loginFields: [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      isRequired: true,
      id: "login-email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      isRequired: true,
      id: "login-password",
    },
  ],
  registerFields: [
    {
      name: "username",
      type: "type",
      placeholder: "Username",
      isRequired: true,
      id: "register-username",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      isRequired: true,
      id: "register-email",
    },
    {
      name: "password",
      type: "text",
      placeholder: "Password",
      isRequired: true,
      id: "register-password",
    },
    {
      name: "passwordAgain",
      type: "password",
      placeholder: "Password again",
      isRequired: true,
      id: "register-password-again",
    },
    {
      name: "privacyPolicy",
      type: "checkbox",
      placeholder: "Confirm privacy policy",
      isRequired: true,
      id: "register-privacy-policy",
    },
  ],
};
