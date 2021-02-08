import React from "react";
import { Route, Routes } from "react-router";
import LoginCadastro from "../LoginCadastro";
import LoginForm from "../LoginForm";

export const Login = () => {
  return (
    <>
      <div>Login teste</div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCadastro />} />
      </Routes>
    </>
  );
};
