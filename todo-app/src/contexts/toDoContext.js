import { createContext, useContext } from "react";

export const toDoContext = createContext({
  todos: [
    {
      id: 1,
      heading: "",
      description: "",
    },
  ],
  addTodo: (heading, description) => {},
  deleteTodo: (id) => {},
  modifyToDo: (id, heading, description) => {},
});

export const ToDoContextProvider = toDoContext.Provider;

export default function useToDoContext() {
  return useContext(toDoContext);
}
