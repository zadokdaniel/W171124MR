import React from "react";
import "./App.css";
import BusinessCard from "./components/BusinessCard";
import Card from "./components/card";

function App() {
  return (
    <div>
      <BusinessCard a={5} b={6} name="lora" email="l@gmail.com">
        some text
      </BusinessCard>

      <BusinessCard name="yoram" email="z@gmail.com" />

      <BusinessCard
        style="danger"
        name="lotem"
        email="lotem@gmail.com"
        address={{
          street: "Hertzel",
          number: 185,
          city: "Rehovot",
          state: "Israel",
        }}
      />
      <BusinessCard />
      {/* <Card /> */}
    </div>
  );
}

export default App;

// npm install bootstrap
