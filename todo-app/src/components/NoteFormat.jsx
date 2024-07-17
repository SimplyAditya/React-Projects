import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import useToDoContext from "../contexts/toDoContext";
export default function NoteFormat({ id, headline, description }) {
  const [isNotEditable, setisNotEditable] = useState(true);
  const [newHeading, setNewHeading] = useState(headline);
  const [newDescription, setNewDescription] = useState(description);

  const { deleteTodo, modifyToDo } = useToDoContext();
  const discardChanges = () => {
    if (window.confirm("Are you sure you want to discard the changes")) {
      setNewHeading(headline);
      setNewDescription(description);
      setisNotEditable(true);
    } else {
      setisNotEditable(false);
    }
  };
  return (
    <>
      <div className="w-2/12 h-2/6 rounded-xl p-4 bg-yellow-300 m-4 flex flex-col">
        <input
          className="w-full bg-transparent focus:outline-none"
          value={newHeading}
          disabled={isNotEditable}
          onChange={(e) => setNewHeading(e.target.value)}
        ></input>
        <hr className="border-t-2 border-black" />
        <textarea
          className="w-full bg-transparent focus:outline-none"
          rows={5}
          style={{
            overflow: "hidden",
          }}
          value={newDescription}
          disabled={isNotEditable}
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
        <div className="w-full flex-grow flex justify-end">
          {!isNotEditable && (
            <button
              className="me-2"
              onClick={() => {
                setisNotEditable(true);
                modifyToDo(id, newHeading, newDescription);
              }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          )}
          {!isNotEditable && (
            <button
              className="me-2"
              onClick={() => {
                discardChanges();
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          {isNotEditable && (
            <button
              className="me-2"
              onClick={() => {
                setisNotEditable(false);
              }}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          )}
          <button
            className="me-2"
            onClick={() => {
              deleteTodo(id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
}
