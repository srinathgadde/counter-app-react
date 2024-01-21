import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 10;

  const addValue = () => {
    // console.log("Clicked", Math.random());
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const removeValue = () => {
    // counter = counter - 1;
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>
        <i>Counter-App</i>
      </h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <br />
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset Value
      </button>

      <footer>footer: {counter}</footer>
    </>
  );
}

export default App;
