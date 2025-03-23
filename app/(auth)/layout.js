//wrapper file to wrap signin and signup page
import React from "react";

const AuthLayout = ({ children }) => {
  return <div className="flex justify-center pt-40">{children}</div>;
};

export default AuthLayout;
