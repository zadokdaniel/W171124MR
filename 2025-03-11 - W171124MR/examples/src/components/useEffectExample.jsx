import { useState, useEffect } from "react";

function UseEffectExample() {
  const [counter, setCounter] = useState(1);
  const [input, setInput] = useState("");

  console.log("rendered", counter);

  // on mount
  useEffect(() => {
    console.log(1, "UseEffect MOUNT ran..");
  }, []);

  // on update
  useEffect(() => {
    console.log(2, "UseEffect UPDATE ran..");
  });

  // on update with deps (dependencies)
  useEffect(() => {
    console.log(3, "UseEffect UPDATE WITH DEPS ran..");

    return () => console.log("hello");
  }, [counter]);

  // mount    #1      always
  // update   #2-n    only when values in the DEPS array changes
  // unmount  #n      the clean up function of last render

  // the change      render   deps      run?          cb
  //                 #1       [0]       V             cu1
  // counter + 1     #2       [1]       cu1() - V
  // input = "s"     #3       [1]       X
  // parent changed  #4       [1]       X

  useEffect(() => {
    const id = setInterval(() => {
      console.log("interval ran", counter);
    }, counter * 1000);

    return () => {
      console.log("cleaned interval");
      clearInterval(id);
    };
  }, [counter]);

  useEffect(() => {
    const fn = (e) => console.log("hello", e.target.innerWidth);

    window.addEventListener("resize", fn);

    return () => {
      window.removeEventListener("resize", fn);
    };
  }, []);

  return (
    <div>
      <h1>Child</h1>

      <button
        onClick={() => setCounter((counter) => counter + 1)}
        className="btn btn-success"
      >
        {counter}
      </button>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="form-control"
      />
    </div>
  );
}

export default UseEffectExample;
