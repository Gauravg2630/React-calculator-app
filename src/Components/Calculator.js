import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

function Calculator() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "=") {
      try {
        // Evaluate the expression safely (for demo purposes only)
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="calculator">
      <div className="display">{expression}</div>
      <div className="button-grid">
        {buttons.map((btn, index) => (
          <Button key={index} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;