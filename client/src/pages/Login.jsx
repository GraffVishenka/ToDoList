import React from "react";

import { Header } from "../components/Header";
import { LoginForm } from "../components/LoginForm";


export const Login = () => {
  return (
    <div className="container">
      <Header />
      <LoginForm />
    </div>
  );
};
