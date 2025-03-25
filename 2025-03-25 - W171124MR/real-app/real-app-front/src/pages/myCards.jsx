import { Link } from "react-router";
import { useState } from "react";
import useMyCards from "../hooks/useMyCards";
import PageHeader from "../components/common/pageHeader";
import BusinessCard from "../components/businessCard";
import { useAuth } from "../context/auth.context";
import { Navigate } from "react-router";

function MyCards() {
  const [input, setInput] = useState("");

  const cards = useMyCards();

  const { user } = useAuth();

  return (
    <div className="container">
      <PageHeader title="My Cards" />

      <div className="row my-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Link to="/create-card">Create a New Card</Link>
        </div>
      </div>

      <div className="row">
        {!cards.length ? (
          <div className="col">no cards</div>
        ) : (
          cards
            .filter((card) =>
              card.bizName.toLowerCase().includes(input.toLowerCase())
            )
            .map((card) => {
              return <BusinessCard key={card._id} card={card} />;
            })
        )}
      </div>
    </div>
  );
}

export default MyCards;
