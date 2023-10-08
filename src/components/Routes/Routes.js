import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "../Create_ an account _or_ log in/CreateAccount";
import Login from "../Create_ an account _or_ log in/Login";
import Home from "../Home/Home";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default Router;
