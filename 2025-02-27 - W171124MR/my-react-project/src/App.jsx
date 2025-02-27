import React from "react";
import "./App.css";

function Comp1() {
  // return (
  //   <div>
  //     <div></div>
  //     <div></div>
  //   </div>
  // );

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("div"),
  //   React.createElement("div")
  // );

  return (
    <div style={{ backgroundColor: "red", width: 200, height: "3rem" }}>
      some text
    </div>
  );
}

function BusinessCard() {
  return <div>some business card</div>;
}

function App() {
  return (
    <div>
      <Comp1 />
      <Comp1 />
      <BusinessCard />
    </div>
  );
}

export default App;
