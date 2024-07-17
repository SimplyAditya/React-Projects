import React from "react";
import useThemeContext from "../contexts/themeContext";

export default function Navbar() {
  const { switchTheme } = useThemeContext();
  return (
    <>
      <div className="bg-yellow-300 text-black p-4 px-8 flex justify-between items-center dark:bg-black h-1/6">
        <div className="text-2xl font-bold hover:text-3xl font-serif dark:text-white">
          My Keep
        </div>
        <button
          className="bg-blue-600 text-white px-2 py-1 rounded-xl text-lg font-serif dark:bg-blackspecial dark:text-white"
          onClick={switchTheme}
        >
          Switch Theme
        </button>
      </div>
    </>
  );
}
