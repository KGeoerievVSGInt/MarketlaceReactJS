import { createContext, useState } from "react";
import { ProviderProps, ContextType } from "../types";
const defaultVal: ContextType = {
  name: "",
  type: "",
  typeSetter: (val) => {},
  nameSetter: (val) => {},
  logout: () => {},
};

export const AuthCtx = createContext<ContextType>(defaultVal);

const savedType = localStorage.getItem("type") ?? null;
const savedName = localStorage.getItem("name") ?? null;

const AuthCtxProvider = ({ children }: ProviderProps) => {
  const [name, setName] = useState(savedName);
  const [type, setType] = useState(savedType);

  const typeSetter = (val: string) => {
    setType(val);
    localStorage.setItem("type", val);
  };
  const nameSetter = (val: string) => {
    setName(val);
    localStorage.setItem("name", val);
  };

  const logout = () => {
    localStorage.removeItem("type");
    localStorage.removeItem("name");
    setName(null);
    setType(null);
  };
  return (
    <AuthCtx.Provider
      value={{
        name,
        type,
        nameSetter,
        typeSetter,
        logout,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

export default AuthCtxProvider;
