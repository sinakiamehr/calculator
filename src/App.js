import "./App.css";
import React, { useState } from "react";

function App() {
  const [expression, setExpression] = useState("0");
  const [evaluated, setEvaluated] = useState(false); // Track if "=" was pressed

  const clickHandler = (e) => {
    const value = e.target.innerText;
    const display = document.getElementById("display");
    const displayValue = display.innerText;
    const lastChar = displayValue[displayValue.length - 1];

    if (value === "AC") {
      setExpression("0");
      setEvaluated(false);
    } else if (value === "=") {
      if (evaluated) {
        return;
      }
      setExpression(eval(displayValue));
      setEvaluated(true);
    } else if (value === ".") {
      if (evaluated) {
        setExpression("0.");
        setEvaluated(false);
      } else {
        const lastNumber = displayValue.split(/[\+\-\*\/]/).pop();
        if (!lastNumber.includes(".")) {
          setExpression(displayValue + value);
        }
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      if (evaluated) {
        setExpression(displayValue + value);
        setEvaluated(false);
      } else if (displayValue === "0") {
        setExpression("0");
      } else if (["+", "*", "/"].includes(lastChar) && value !== "-") {
        setExpression(displayValue.slice(0, -1) + value);
      } else if (["+", "*", "/"].includes(lastChar) && value === "-") {
        setExpression(displayValue + value);
      } else if (lastChar === "-" && ["+", "*", "/"].includes(value)) {
        setExpression(displayValue.slice(0, -2) + value);
      } else {
        setExpression(displayValue + value);
      }
    } else {
      if (evaluated) {
        setExpression(value);
        setEvaluated(false);
      } else if (displayValue === "0") {
        setExpression(value);
      } else {
        setExpression(displayValue + value);
      }
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display" id="display">
          {expression}
        </div>
        <div className="buttons">
          <button onClick={clickHandler} id="clear">
            AC
          </button>
          <button onClick={clickHandler} id="divide">
            /
          </button>
          <button onClick={clickHandler} id="multiply">
            *
          </button>
          <button onClick={clickHandler} id="subtract">
            -
          </button>
          <button onClick={clickHandler} id="add">
            +
          </button>
          <button onClick={clickHandler} id="seven">
            7
          </button>
          <button onClick={clickHandler} id="eight">
            8
          </button>
          <button onClick={clickHandler} id="nine">
            9
          </button>
          <button onClick={clickHandler} id="four">
            4
          </button>
          <button onClick={clickHandler} id="five">
            5
          </button>
          <button onClick={clickHandler} id="six">
            6
          </button>
          <button onClick={clickHandler} id="one">
            1
          </button>
          <button onClick={clickHandler} id="two">
            2
          </button>
          <button onClick={clickHandler} id="three">
            3
          </button>
          <button onClick={clickHandler} id="equals">
            =
          </button>
          <button onClick={clickHandler} id="zero">
            0
          </button>
          <button onClick={clickHandler} id="decimal">
            .
          </button>
        </div>
      </div>
      <footer className="footer">
        <p>
          Designed and Coded by <strong>Sina Kiamehr</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
