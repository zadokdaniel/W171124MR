import React from "react";

import "./App.css";

function App() {
  const users = [
    { id: 1, name: "dnaiel", age: 30 },
    { id: 2, name: "lora", age: 28 },
    { id: 3, name: "yoram", age: 41 },
  ];

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="text-primary">
            {user.name} <span className="text-muted">({user.age})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
