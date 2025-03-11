import { useState } from "react";

function StateExample({ a, b, c, d }) {
  const [counter, setCounter] = useState(5);

  const [user, setUser] = useState({
    name: "shalom",
    age: 38,
    favorites: ["movies", "apple", "bike"],
  });

  const [input, setInput] = useState("");

  return (
    <div>
      <button onClick={() => setInput("")} className="btn btn-danger">
        reset
      </button>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        type="text"
      />
      <span>welcome, {input}</span>

      <select value="bvalue" onChange={(e) => console.log(e.target.value)}>
        <option value="avalue">a</option>
        <option value="bvalue">b</option>
        <option value="cvalue">c</option>
        <option value="dvalue">d</option>
      </select>

      <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>{c}</li>
        <li>{String(d)}</li>
      </ul>

      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
        className="btn btn-success"
      >
        {counter}
      </button>

      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.favorites?.join(" ,")}</li>
      </ul>

      <button
        onClick={() => {
          setUser((user) => ({
            ...user,
            // name: user.name
            // age: user.age,
            // favorites: user.favorites,
            name: "lora",
            favorites: [...user.favorites],
          }));
        }}
        className="btn btn-danger"
      >
        change to lora
      </button>
    </div>
  );
}

export default StateExample;
