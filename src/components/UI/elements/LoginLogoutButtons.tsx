import { useUser } from "@auth0/nextjs-auth0";
import React from "react";

const LoginLogoutButtons = () => {
  const { user, error, isLoading } = useUser();
  let buttonGroup;

  if (isLoading) {
    buttonGroup = (
      <button disabled={true} className="btn rvtr-btn-primary">
        Loading...
      </button>
    );
  } else if (user) {
    buttonGroup = (
      <React.Fragment>
        Hello, {user.name} &nbsp;
        <a href="/api/auth/logout" className="btn rvtr-btn-primary">
          Logout
        </a>
      </React.Fragment>
    );
  } else {
    buttonGroup = (
      <a href="/api/auth/login" className="btn rvtr-btn-primary">
        Login
      </a>
    );
  }

  return <React.Fragment>{buttonGroup}</React.Fragment>;
};
export default LoginLogoutButtons;
