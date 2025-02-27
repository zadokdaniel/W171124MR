import "./App.css";

function BusinessCard(props) {
  console.log(props);

  return (
    <div style={{ backgroundColor: "lightblue", padding: 5, marginTop: 10 }}>
      <h1>
        {props.title}
        <span style={{ fontSize: "0.5em", color: "gray" }}>
          since {props.year}
        </span>
      </h1>

      <p>{props.description}</p>

      <p>
        {props.address?.street} {props.address?.number}, {props.address?.city},
        {props.address?.state}
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <BusinessCard title="Lemon LTD." year={1898} a={5} b={10} />
      <BusinessCard title="Discord" />
      <BusinessCard />
    </div>
  );
}

export default App;
