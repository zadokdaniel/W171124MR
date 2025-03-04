import { useState } from "react";

function StateExample() {
  const [counter, setCounter] = useState(0);

  console.log("stateExample rerendered");

  const handleIncrement = () => setCounter((counter) => counter + 1);

  return (
    <div className="d-flex w-25 mx-auto justify-content-center align-items-center">
      <button className="btn btn-danger">-</button>
      <span className="w-25 text-center">{counter}</span>
      <button className="btn btn-success" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default StateExample;

/**
 * State    - value which when changed the ui should change accordingly
 * Hook     - function name starts with "use", and it uses core hooks
 */
