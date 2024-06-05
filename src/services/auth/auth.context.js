import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../../../firebase";
import { loginRequest, registerRequest, signOutRequest } from "./auth.services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [profile, setProfile] = useState(null);

  const getProfile = async (id) => {
    const image = await AsyncStorage.getItem(`@profile-${id}`);
    setProfile(image);
  };

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((credentials) => {
        setUser(credentials);
        setError(null);
        setIsLoading(false);
        setIsAuthorized(true);
      })
      .catch((err) => {
        setError(err.code);
        setIsLoading(false);
        setIsAuthorized(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword)
      return setError("Error: Passwords do not match");
    setIsLoading(true);
    registerRequest(email, password)
      .then((credentials) => {
        setUser(credentials);
        setError(null);
        setIsLoading(false);
        setIsAuthorized(true);
      })
      .catch((err) => {
        setError(err.code);

        setIsLoading(false);
        setIsAuthorized(false);
      });
  };

  const onSignOut = () => {
    setUser(null);
    setIsAuthorized(false);
    signOutRequest();
  };

  useEffect(() => {
    getProfile(user?.uid);
  }, [user, photo]);

  const value = {
    user,
    isLoading,
    error,
    isAuthorized,
    profile,
    setPhoto,
    onLogin,
    onRegister,
    onSignOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
