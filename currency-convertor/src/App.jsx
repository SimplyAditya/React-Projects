import React, { useState, useEffect } from "react";
import useCurrencyConvertor from "./hooks/CurrencyConvert";
import CurrencyBox from "./components/CurrencyBox";

function App() {
  const [currencyData, setCurrencyData] = useState(useCurrencyConvertor("USD"));
  const [options, setOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [fromAmt, setFromAmt] = useState(10);
  const [multiplerValue, setMultiplierValue] = useState(83.430099795);
  const [toAmt, setToAmt] = useState(fromAmt * multiplerValue);
  const data = useCurrencyConvertor(fromCurrency);
  useEffect(() => {
    setOptions(Object.keys(currencyData));
  }, [currencyData]);
  useEffect(() => {
    setCurrencyData(data);
  }, [fromCurrency, data]);
  useEffect(() => {
    if (currencyData[toCurrency]) {
      setMultiplierValue(currencyData[toCurrency].value);
    }
  }, [toCurrency, currencyData]);
  useEffect(() => {
    setToAmt(fromAmt * multiplerValue);
  }, [fromAmt, toAmt, multiplerValue]);

  return (
    <>
      <div className="bg-black h-screen w-screen flex">
        <div className="h-screen w-3/5 flex items-center justify-center">
          <p className="text-white text-8xl font-bold py-4">
            Currency Convertor
          </p>
        </div>
        <div className="h-screen w-2/5 flex flex-col items-center justify-center">
          <CurrencyBox
            label="From"
            defaultValue={fromAmt}
            defCurrency={fromCurrency}
            disabled={false}
            options={options}
            currencyFunction={(frmCur) => {
              setFromCurrency(frmCur);
            }}
            amtFunction={(frmAmt) => {
              setFromAmt(frmAmt);
            }}
          />
          <br />
          <CurrencyBox
            label="To"
            defaultValue={toAmt}
            defCurrency={toCurrency}
            disabled={true}
            options={options}
            currencyFunction={(toCur) => {
              setToCurrency(toCur);
            }}
            amtFunction={(toAmt) => {
              setToAmt(toAmt);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
