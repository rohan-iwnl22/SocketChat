import { createContext, useCallback, useEffect, useState } from "react";
import { baseURL, postRequest } from "../utils/service";
import { json } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("User");
    setUser(JSON.parse(user));
  }, []);

  const registerUser = useCallback(
    async (e) => {
      setIsRegisterLoading(true);
      setRegisterError(null);
      e.preventDefault();
      const response = await postRequest(
        `${baseURL}/users/register`,
        JSON.stringify(registerInfo)
      );

      setIsRegisterLoading(false);
      if (response.error) {
        setRegisterError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [registerInfo]
  );
  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerError,
        registerUser,
        isRegisterLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
