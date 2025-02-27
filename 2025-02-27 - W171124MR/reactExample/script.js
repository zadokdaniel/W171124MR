// const elements = React.createElement("button", {
//   className: "btn btn-primary",
//   onClick: () => console.log("clicked"),
//   id: "my-btn",
//   children: "some text",
// });
const elements = React.createElement(
  "div",
  {
    className: "btn btn-primary",
    id: "my-btn",
  },
  React.createElement("input", {
    value: "hello",
    onChange: () => console.log("changed"),
  }),
  React.createElement(
    "button",
    {
      className: "btn btn-primary",
      id: "555",
      onClick: () => {
        console.log("hello");
      },
    },
    "my button"
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elements);
