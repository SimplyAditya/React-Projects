import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState("8");
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(true);
  let [numbers, setNumbers] = useState(false);
  let [characters, setCharacters] = useState(false);

  const handlePassword = useCallback(() => {
    let pass = "";
    let str = "";
    if (uppercase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      str += "abcdefghijklmnopqrstuvqwxyz";
    }
    if (numbers) {
      str += "0123456789";
    }
    if (characters) {
      str += "/><{})([]!@#$%&*+_=-";
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, uppercase, lowercase, numbers, characters, setPassword]);

  useEffect(() => {
    handlePassword();
  }, [length, uppercase, lowercase, numbers, characters, handlePassword]);

  return (
    <>
      <div
        className="w-screen h-screen bg-black inline-block align-middle"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="text-white text-3xl h-96 py-8 text-center rounded-2xl w-full"
          style={{
            backgroundColor: "#1C1D24",
            width: "60%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="text-5xl">Password Generator</h1>
          <div className="w-full my-10">
            <input
              className="my-8 h-16 w-3/5 rounded-2xl text-black px-4"
              type="text"
              placeholder="Password"
              value={password}
              disabled
            ></input>
            <button
              className="h-16 w-32"
              onClick={() => {
                window.navigator.clipboard.writeText(password);
              }}
            >
              Copy
            </button>
          </div>
          <div
            className="w-3/5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <input
              type="range"
              className="w-20 h-auto mx-4"
              id="length"
              min={8}
              max={20}
              value={length}
              onChange={(e) => {
                const val = e.target.value;
                setLength(val);
                console.log(value);
              }}
            ></input>
            <label className="text-white  text-lg" htmlFor="length">
              Length({length})
            </label>
            <input
              type="checkbox"
              className="mx-6"
              id="uppercase"
              onChange={() => {
                setUppercase(!uppercase);
              }}
            />
            <label className="text-lg" htmlFor="uppercase">
              Uppercase
            </label>
            <input
              type="checkbox"
              className="mx-6"
              id="lowercase"
              checked
              onChange={() => {
                setLowercase(!lowercase);
              }}
            />
            <label className="text-lg" htmlFor="lowercase">
              Lowercase
            </label>
            <input
              type="checkbox"
              className="mx-6"
              id="numbers"
              onChange={() => {
                setNumbers(!numbers);
              }}
            />
            <label className="text-lg" htmlFor="numbers">
              Numbers
            </label>
            <input
              type="checkbox"
              className="mx-6"
              id="characters"
              onChange={() => {
                setCharacters(!characters);
              }}
            />
            <label className="text-lg" htmlFor="characters">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
