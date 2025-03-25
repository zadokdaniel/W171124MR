import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import cardsService from "../services/cardsService";

const CardDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(id);
      navigate("/my-cards");
    };

    deleteCard();
  }, []);

  return null;
};

export default CardDelete;
