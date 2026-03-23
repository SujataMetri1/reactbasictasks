import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [prev, setPrev] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumber = (num) => {
    setInput(input + num);
  };

  const handleOperator = (op) => {
    setPrev(input);
    setOperator(op);
    setInput("");
  };

  const handleEqual = () => {
    let result;
    const a = parseFloat(prev);
    const b = parseFloat(input);

    if (operator === "+") result = a + b;
    if (operator === "-") result = a - b;
    if (operator === "*") result = a * b;
    if (operator === "/") result = a / b;

    setInput(result.toString());
    setPrev(null);
    setOperator(null);
  };

  const handleClear = () => {
    setInput("");
    setPrev(null);
    setOperator(null);
  };

  return (
    <div>
      <h2>{input || "0"}</h2>

      <button onClick={() => handleNumber("1")}>1</button>
      <button onClick={() => handleNumber("2")}>2</button>
      <button onClick={() => handleNumber("3")}>3</button><br />

      <button onClick={() => handleNumber("4")}>4</button>
      <button onClick={() => handleNumber("5")}>5</button>
      <button onClick={() => handleNumber("6")}>6</button><br />

       <button onClick={() => handleNumber("7")}>7</button>
      <button onClick={() => handleNumber("8")}>8</button>
      <button onClick={() => handleNumber("9")}>9</button>

      <button onClick={() => handleOperator("+")}>+</button>

      <button onClick={handleEqual}>=</button>
      <button onClick={handleClear}>C</button>
    </div>
  );
}

export default Calculator;