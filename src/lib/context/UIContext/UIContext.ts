import React, { useContext } from "react";

export interface UIContextType {}

const UIContextValues: UIContextType = {};

export const UIContext = React.createContext<UIContextType>(UIContextValues);

export const useUIContext = () => useContext(UIContext);
