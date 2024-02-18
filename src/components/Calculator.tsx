import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./styles.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Function to handle button clicks will be added here
  const handleClick = (buttonValue: string) => {
    if (buttonValue === "AC") {
      setInput("");
      setResult("");
    } else if (buttonValue === "Del") {
      setInput(input.slice(0, -1));
    } else if (buttonValue === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + buttonValue);
    }
  };
  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="button-panel">
        <Button value="AC" onClick={() => handleClick("AC")} />
        <Button value="Del" onClick={() => handleClick("Del")} />
        <Button value="=" onClick={() => handleClick("=")} />
        <Button value="/" onClick={() => handleClick("/")} />
        {/* Numbers and Operators */}
        {[
          "AC",
          "Del",
          "7",
          "8",
          "9",
          "4",
          "5",
          "6",
          "1",
          "2",
          "3",
          "0",
          ".",
        ].map((buttonValue) => (
          <Button
            key={buttonValue}
            value={buttonValue}
            onClick={() => handleClick(buttonValue)}
          />
        ))}
        {["/", "*", "-", "+", "%"].map((op) => (
          <Button
            key={op}
            value={op}
            onClick={() => handleClick(op)}
            className="operation"
          />
        ))}
        <Button value="0" onClick={() => handleClick("0")} className="double" />
        {/* <Button value="." onClick={() => handleClick(".")} /> */}
        {/* <Button value="%" onClick={() => handleClick("%")} /> */}
      </div>
    </div>
  );
};

export default Calculator;
