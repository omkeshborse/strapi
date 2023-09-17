import { createContext, useState, useContext } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };
  return (
    <AppContext.Provider value={{ isSideBarOpen, openSideBar, closeSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
