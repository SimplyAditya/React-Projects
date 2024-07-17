import React from "react";
import useNewNoteContext from "../contexts/newNoteContext";

export default function NewNote() {
  const { switchNewNoteMode } = useNewNoteContext();

  return (
    <>
      <div
        className="w-4/5 rounded-3xl px-8 py-4 bg-yellow-300 flex items-center text-xl dark:bg-black dark:text-white"
        onClick={() => {
          switchNewNoteMode();
        }}
      >
        Create New Note...
      </div>
    </>
  );
}
