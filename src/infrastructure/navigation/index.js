import React, { useContext } from "react";
import { AuthContext } from "../../services/auth/auth.context";
import AppNavigator from "./app.navigator";
import { AuthNavigator } from "./auth.navigator";

const Navigation = () => {
  const { isAuthorized } = useContext(AuthContext);
  return true ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;
