import React from "react";
import FormLogin from "./src/screen/auth/login";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";

const logo = require("./assets/icon/login.png");

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
