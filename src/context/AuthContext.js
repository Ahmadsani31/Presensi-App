import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";

import { Buffer } from "buffer";
import axios from "axios";
import Navigation from "../components/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setLoading] = useState(false);

  const login = (user, pass) => {
    setLoading(true);

    const username = "bitkom-api";
    const password = "#bitkom2023";
    const encoded = Buffer.from(username + ":" + password).toString("base64");
    console.log({ user, pass });

    axios
      .get("https://jsonplaceholder.typicode.com/todos/3")
      .then((response) => {
        let userInfo = response.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(`login error ${error}`);
      });
  };

  const logout = () => {
    setLoading(true);
    console.log("log out");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
