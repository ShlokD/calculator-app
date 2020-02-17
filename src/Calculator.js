import React, { Fragment, useState } from "react";

export const NumberDisplay = ({ value }) => {
  return (
    <Fragment>
      <p data-testid="number-display">{value}</p>
    </Fragment>
  );
};

export const NumberGrid = ({ onSelectNumber }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <Fragment>
      {numbers.map(num => (
        <button
          className={num === 0 ? "pa2 grid-2" : "pa2"}
          onClick={() => onSelectNumber(num)}
          key={`calc-${num}`}
        >
          {num}
        </button>
      ))}
    </Fragment>
  );
};

export const Operators = ({ onSelectOperation }) => {
  const operators = ["+", "-", "*", "/", "="];
  return (
    <div className="flex items-center justify-between mt2">
      {operators.map((operator, index) => (
        <button
          onClick={() => onSelectOperation(operator)}
          className="ma2 pa3"
          key={`calc-operator-${index}`}
        >
          {operator}
        </button>
      ))}
    </div>
  );
};

export default ({ calculator }) => {
  const [number, setNumber] = useState(0);
  const [operation, setOperation] = useState("");

  const appendNumber = enteredNumber => {
    setNumber(number * 10 + enteredNumber);
  };

  const performOperation = currentOperation => {
    if (calculator.getOperandA() === 0) {
      calculator.setOperandA(number);
    } else if (calculator.getOperandB() === 0) {
      calculator.setOperandB(number);
    }

    if (currentOperation === "=") {
      const result = calculator.compute(operation);
      setNumber(result);
      setOperation("");
    } else {
      setNumber(0);
      setOperation(currentOperation);
    }
  };

  return (
    <div className="flex flex-column items-center justify-center h-100 w-100">
      <NumberDisplay value={number} />
      <div className="calc-grid">
        <NumberGrid onSelectNumber={appendNumber} />
      </div>
      <Operators onSelectOperation={performOperation} />
    </div>
  );
};
