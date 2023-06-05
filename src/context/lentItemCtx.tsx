import { createContext, useState } from "react";
import { LentContextType, ProviderProps } from "../types";

const defaultValues: LentContextType = {
  isLentModalVisible: false,
  toggleLentModal: () => {},
  itemId: null,
};

export const LentItemCtx = createContext<LentContextType>(defaultValues);

const LentItemContextProvider = ({ children }: ProviderProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [lentItemId, setLentItemId] = useState<number | null>(null);

  const toggleModal: LentContextType["toggleLentModal"] = (id) => {
    setIsModalVisible((prevState) => !prevState);
    setLentItemId(id);
  };
  return (
    <LentItemCtx.Provider
      value={{
        isLentModalVisible: isModalVisible,
        toggleLentModal: toggleModal,
        itemId: lentItemId,
      }}
    >
      {children}
    </LentItemCtx.Provider>
  );
};

export default LentItemContextProvider;
