import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import useThemeContext, { ThemeContextProvider } from "./contexts/themeContext";
import NoteFormat from "./components/NoteFormat";
import NewNote from "./components/NewNote";
import NewNoteMain from "./components/NewNoteMain";
import useNewNoteContext, {
  NewNoteContextProvider,
} from "./contexts/newNoteContext";
import { ToDoContextProvider } from "./contexts/toDoContext";

function App() {
  const [theme, setTheme] = useState(useThemeContext().theme);
  const [newNotemode, setNewNoteMode] = useState(
    useNewNoteContext().newNotemode
  );
  const [todos, setTodos] = useState([]);
  const addTodo = (heading, description) => {
    const id = Date.now();
    const newTodo = {
      id,
      heading,
      description,
    };
    setTodos([...todos, newTodo]);
  };
  const modifyToDo = (id, heading, description) => {
    const newTodo = {
      id,
      heading,
      description,
    };
    setTodos((prev) =>
      prev.map((prevToDo) => (prevToDo.id === id ? newTodo : prevToDo))
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((singletodo) => singletodo.id !== id));
  };
  const switchNewNoteMode = () => {
    setNewNoteMode(!newNotemode);
  };
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <ThemeContextProvider value={{ theme, switchTheme }}>
      <div className="dark:bg-blackspecial h-screen">
        <Navbar />
        <ToDoContextProvider value={{ todos, addTodo, modifyToDo, deleteTodo }}>
          <NewNoteContextProvider value={{ newNotemode, switchNewNoteMode }}>
            <div className="flex flex-col items-center h-fit py-8">
              {!newNotemode && <NewNote />}
              {newNotemode && <NewNoteMain />}
            </div>
          </NewNoteContextProvider>
          <div className="flex flex-wrap">
            {todos.map((singletodo) => (
              <NoteFormat
                key={singletodo.id}
                headline={singletodo.heading}
                description={singletodo.description}
                id={singletodo.id}
              />
            ))}
          </div>
        </ToDoContextProvider>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
