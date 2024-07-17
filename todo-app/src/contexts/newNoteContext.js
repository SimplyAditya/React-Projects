import { createContext, useContext } from "react";

export const newNoteContext = createContext({
  newNotemode: false,
  switchNewNoteMode: () => {},
});

export const NewNoteContextProvider = newNoteContext.Provider;

export default function useNewNoteContext() {
  return useContext(newNoteContext);
}
