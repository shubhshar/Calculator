import React, { useState } from "react";
function App() {
  const [cal, setCal] = useState("");
  const [res, setRes] = useState("");

  const ops = ["+", "-", "*", "/", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && cal === "") ||
      (ops.includes(value) && ops.includes(cal.slice(-1)))
    )
      return;
    setCal(cal + value);

    if (!ops.includes(value)) {
      setRes(eval(cal + value).toString());
    }
  };

  const calculate = () => setCal(eval(cal).toString());

  const delNum = () => {
    if (cal == "") {
      return;
    }
    const value = cal.slice(0, -1);
    setCal(value);
  };

  const createDigits = () => {
    const digitArray = [];

    for (let i = 1; i < 10; i++) {
      digitArray.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digitArray;
  };

  return (
    <>
      <div className="App">
        <div className="Calc">
          <div className="Display">
            {/* {res ? <span>({res})</span> : '' }
             */}{" "}
            {cal || "0"}
          </div>
          <div className="Operators">
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={delNum}>DEL</button>
          </div>
          <div className="Digits">
            {createDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
