import { createContext, useState } from "react";
import { ProviderProps, AuthContextType } from "../types";
const defaultVal: AuthContextType = {
  user: "",
  userSetter: () => {},
  logout: () => {},
};

export const AuthCtx = createContext<AuthContextType>(defaultVal);

const savedUser = localStorage.getItem("user") ?? null;

const AuthCtxProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState(savedUser);

  const userSetter = (val: string) => {
    setUser(val);
    localStorage.setItem("user", val);
  };

  const logout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthCtx.Provider
      value={{
        user,
        userSetter,
        logout,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

export default AuthCtxProvider;
