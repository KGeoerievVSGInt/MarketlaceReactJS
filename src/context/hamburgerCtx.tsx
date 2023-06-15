import { createContext, useState } from "react";
import { HamburgerContexType, LentItemsProviderProps } from "../types";
const defaultValues: HamburgerContexType = {
  isMenuShown: true,
  menuToggle: () => {},
};

export const HamburgerCtx = createContext<HamburgerContexType>(defaultValues);

const HamburgerCtxProvider = ({ children }: LentItemsProviderProps) => {
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
