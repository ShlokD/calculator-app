import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./Calculator";
import * as serviceWorker from "./serviceWorker";

const calculatorModule = () => {
  let operandA = 0;
  let operandB = 0;

  const availableOperations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };

  return {
    setOperandA: val => (operandA = val),
    setOperandB: val => (operandB = val),
    getOperandA: () => operandA,
    getOperandB: () => operandB,
    compute: operation => {
        const calcFunction = availableOperations[operation];
        return calcFunction(operandA, operandB);
    }
  };
};

const calculator = calculatorModule();

ReactDOM.render(
  <Calculator calculator={calculator} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
