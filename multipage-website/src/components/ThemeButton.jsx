import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function ThemeButton() {
    const {themeMode,switchTheme} =useContext(ThemeContext)
    
  return (
    <>
      <label className="relative inline-flex items-center">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={switchTheme}
          checked={themeMode==="dark"}
          />
        <div className="w-11 h-6 dark:bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
          Toggle Theme
        </span>
      </label>
    </>
  );
}

export default ThemeButton;
