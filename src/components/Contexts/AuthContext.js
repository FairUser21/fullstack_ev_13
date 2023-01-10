import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_AUTH } from "../../helper";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  let value = {};
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
