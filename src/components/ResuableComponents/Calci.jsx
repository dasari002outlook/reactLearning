//write a calculator function in javascript

import React from "react";

export default function Calci() {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [operation, setOperation] = React.useState("+");

  const calculate = () => {
    switch (operation) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="row">
      <input
        className="numInput"
        type="number"
        value={num1}
        onChange={(e) => setNum1(+e.target.value)}
      />
      <select
        className="operation"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        className="numInput"
        value={num2}
        onChange={(e) => setNum2(+e.target.value)}
      />
      <button className="calculate" onClick={calculate}>
        =
      </button>
      <label className="result">{result}</label>
    </div>
  );
}
