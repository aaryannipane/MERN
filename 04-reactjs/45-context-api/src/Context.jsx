import React from "react";
const MyContext = React.createContext("default value");
export const Provider = MyContext.Provider;
export const Consumer = MyContext.Consumer;
