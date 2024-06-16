import { useState, useContext, useEffect, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const greeting = "hello";
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
