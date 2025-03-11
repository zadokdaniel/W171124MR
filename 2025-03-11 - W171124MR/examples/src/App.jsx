import { useState } from "react";
import "./App.css";
import StateExample from "./components/state";
import UseEffectExampleParent from "./components/useEffectExampleParent";

function App() {
  return (
    <div>
      {/* <StateExample a="some string" b={5} c={4 + 5} d /> */}

      <UseEffectExampleParent />
    </div>
  );
}

export default App;
