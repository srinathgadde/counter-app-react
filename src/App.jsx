import { useState } from "react";
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
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); even though we write it for n number of times, React will batch these updates into a single update.
    // he equivalent of the above code would be: setCounter(counter + 4);

    // This is because React will batch the state updates and
    // apply them all at once to avoid unnecessary re-renders.
    // If you need to perform state updates based on the previous state,
    // it's better to use the functional form of setCounter that takes a callback function:

    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1); //setCounter(counter=> counter+ 1);  also works..arrow function takes the previous state as an argument and returns the new state. we can use any name in place of setCounter    setCounter((prevCounter) => prevCounter + 1); //equivalent: setCounter(prevCounter => prevCounter + 4);
    // The reason React won't batch those updates into a single update in this case is due to
    // the asynchronous nature of state updates and the functional updates with the callback.
    // When you use the functional form of setCounter with a callback, React cannot guarantee
    // that these updates should be batched into a single update. Each call to setCounter
    // is scheduled separately, and they could be interleaved with other updates or asynchronous actions.

    // Each call to setCounter is based on the previous state (prevCounter), and they are separate asynchronous operations.
    // React cannot make assumptions about their order of execution or whether other state updates might occur in between them.
    // Therefore, React treats them as separate updates, and they won't be automatically batched into a single update.

    // By using the callback function, you ensure that the state update is based on the latest state value, addressing potential issues
    // that might arise due to the asynchronous nature of state updates.

    // In summary, the asynchronous nature of state updates in React is a performance optimization strategy that helps ensure efficient
    // rendering and consistent behavior while allowing React to batch and manage state updates
    //  in a way that is beneficial for the overall application performance.
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

// import MyButton from "./components/MyButton";

// function App() {
//   return (
//     <>
{
  /* <h1>Counters that update separately</h1>; */
}

//       <MyButton />
//       <MyButton />
//     </>
//   );
// }

// export default App;

// import MyButton from "./components/MyButton";
// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </>
//   );
// }

// export default App;
