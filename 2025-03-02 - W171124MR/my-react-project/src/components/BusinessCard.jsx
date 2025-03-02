import React from "react";

function BusinessCard({
  style = "success",
  name = "default",
  email = "",
  address,
}) {
  if (name === "default") {
    return <div>hello</div>;
  }

  return (
    <div className={"bg-" + style}>
      <div>{name === "daniel" ? "hello" : "bye"}</div>
      <div>{email.toUpperCase()}something</div>
      {address ? (
        <div>
          {address.street} {address.number}, {address.city}, {address.state}
        </div>
      ) : (
        <p>hello</p>
      )}
    </div>
  );
}

export default BusinessCard;
