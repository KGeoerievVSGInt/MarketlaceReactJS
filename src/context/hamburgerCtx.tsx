import { createContext, useState } from "react";
import { HamburgerContexType, ProviderProps } from "../types";
const defaultValues: HamburgerContexType = {
  isMenuShown: true,
  menuToggle: () => {},
};

export const HamburgerCtx = createContext<HamburgerContexType>(defaultValues);

const HamburgerCtxProvider = ({ children }: ProviderProps) => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const menuToggle = () => {
    setIsMenuShown((prevState) => !prevState);
  };
  return (
    <HamburgerCtx.Provider value={{ isMenuShown, menuToggle }}>
      {children}
    </HamburgerCtx.Provider>
  );
};
export default HamburgerCtxProvider;
