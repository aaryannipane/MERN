import React, { useContext } from "react";
import { Theme, ThemeContext } from "./context/themeContext";

export const DeepComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      {theme}
      <br />
      <button onClick={()=>{setTheme(theme=>theme=="light"?"dark":"light")}}>Change Theme</button>
    </div>
  );
};
