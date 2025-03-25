import { useState, useEffect } from "react";

import cardsService from "../services/cardsService";

function useMyCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const cards = await cardsService.getAll();
      setCards(cards.data);
    }

    getCards();
  }, []);

  return cards;
}

export default useMyCards;
