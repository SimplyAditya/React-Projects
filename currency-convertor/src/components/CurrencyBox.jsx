import React, { useEffect, useState } from "react";

function CurrencyBox({
  label,
  defCurrency,
  defaultValue,
  disabled,
  options,
  currencyFunction,
  amtFunction,
}) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <div
      className="w-4/5 h-44 rounded-xl text-white flex bg-gray-900"
      style={{ backgroundColor: "#111" }}
    >
      <div className="w-3/5 h-full flex flex-col rounded-xl">
        <div className="w-full h-1/2 p-8 px-12 text-2xl">{label}</div>
        <input
          className="w-full h-1/2 -my-4 px-12 text-2xl bg-transparent focus:outline-none"
          placeholder="Enter the Value"
          value={value}
          disabled={disabled}
          onChange={(e) => {
            setValue(e.target.value);
            amtFunction(e.target.value);
          }}
        />
      </div>
      <div className="w-2/5 h-full flex flex-col justify-center items-center rounded-xl">
        <select
          className="w-3/5 bg-transparent text-2xl focus:outline-none"
          value={defCurrency}
          onChange={(e) => {
            currencyFunction(e.target.value);
          }}
        >
          {options.map((value) => (
            <option
              value={value}
              key={value}
              className="bg-black text-white focus:outline-none"
            >
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyBox;
