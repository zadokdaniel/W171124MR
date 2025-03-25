import { useState, useEffect } from "react";
import cardsService from "../services/cardsService";

function useCard(id) {
  const [card, setCard] = useState(null);

  useEffect(() => {
    async function getCard() {
      const card = await cardsService.getCard(id);

      setCard(card);
    }

    getCard();
  }, []);

  return card;
}

export default useCard;
