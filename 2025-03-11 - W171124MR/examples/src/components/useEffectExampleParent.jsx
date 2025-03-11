import { useState } from "react";
import UseEffectExample from "./useEffectExample";

/**
 * 1. custom hook is actually a function
 * 2. the name will start with "use" to indicate it is an hook
 * 3. hook rules apply - only use in custom hook or component, and only in function's main block (not inside if, while)
 * 4. a function which uses other custom hooks or uses react hooks is a custom hook
 */

function UseEffectExampleParent() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-danger">
      <h1>parent</h1>

      <button
        onClick={() => setIsVisible((isVisible) => !isVisible)}
        className="btn btn-danger"
      >
        {isVisible ? "hide" : "show"}
      </button>
      <button
        onClick={() => setCounter((counter) => counter + 1)}
        className="btn btn-success"
      >
        {counter}
      </button>

      {isVisible ? (
        <div className="m-5  border border-danger">
          <UseEffectExample />
        </div>
      ) : null}
    </div>
  );
}

export default UseEffectExampleParent;
