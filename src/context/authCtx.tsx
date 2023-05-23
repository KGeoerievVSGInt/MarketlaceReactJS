import { createContext, useState } from "react";
import { ProviderProps, ContextType } from "../types";
const defaultVal: ContextType = {
  user: "",
  userSetter: (val) => {},
  logout: () => {},
};

export const AuthCtx = createContext<ContextType>(defaultVal);

const savedUser = localStorage.getItem("user") ?? null;

const AuthCtxProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState(savedUser);

  const userSetter = (val: string) => {
    setUser(val);
    localStorage.setItem("user", val);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
