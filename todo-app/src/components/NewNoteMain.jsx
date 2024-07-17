import React, { useState } from "react";
import useNewNoteContext from "../contexts/newNoteContext";
import useToDoContext from "../contexts/toDoContext";

export default function NewNoteMain() {
  const { switchNewNoteMode } = useNewNoteContext();
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const { addTodo } = useToDoContext();
  return (
    <div className="w-4/5 h-48 bg-yellow-300 px-8 flex flex-col rounded-xl text-xl dark:bg-black dark:text-white">
      <input
        className="mt-4 w-full bg-transparent focus:outline-none"
        placeholder="Heading"
        value={heading}
        onChange={(e) => {
          setHeading(e.target.value);
        }}
      ></input>

      <textarea
        className="mt-4 w-full bg-transparent focus:outline-none"
        rows={3}
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <div className="bg-transparent w-full flex-grow flex justify-end items-center text-2xl">
        <button
          className="me-4"
          onClick={() => {
            switchNewNoteMode();
            addTodo(heading, description);
          }}
        >
          Save
        </button>
        <button
          className=""
          onClick={() => {
            switchNewNoteMode();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
