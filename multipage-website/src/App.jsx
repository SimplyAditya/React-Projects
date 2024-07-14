import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header/Header";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/themeContext";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "light");
  const switchTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, switchTheme }}>
        <Header />
        <div className="flex justify-end px-4 dark:bg-black dark:text-white">
          <ThemeButton />
        </div>
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
