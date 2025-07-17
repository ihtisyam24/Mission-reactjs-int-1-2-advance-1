import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeLayouts from "../layouts/HomeLayouts";
import CollectionP from "../components/molecules/CollectionP";
import ProducList from "../components/molecules/ProducList";

import {
  getCards,
  addCard,
  updateCard,
  deleteCard,
} from "../../services/api/api";
import {
  setCards,
  addCard as addCardAction,
  updateCard as updateCardAction,
  deleteCard as deleteCardAction,
} from "../../store/redux/store";

export default function Allproduct() {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.cards.cards);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await getCards();
        dispatch(setCards(data));
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      }
    }
    fetchCards();
  }, [dispatch]);

  const handleAddProduct = async (product) => {
    try {
      const newCard = await addCard(product);
      dispatch(addCardAction(newCard));
    } catch (error) {
      console.error("Failed to add card:", error);
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      const updatedCard = await updateCard(id, updatedProduct);
      dispatch(updateCardAction(updatedCard));
    } catch (error) {
      console.error("Failed to update card:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteCard(id);
      dispatch(deleteCardAction(id));
    } catch (error) {
      console.error("Failed to delete card:", error);
    }
  };

  return (
    <HomeLayouts>
      <CollectionP />
      <ProducList
        products={productsState}
        onAdd={handleAddProduct}
        onUpdate={handleUpdateProduct}
        onDelete={handleDeleteProduct}
      />
    </HomeLayouts>
  );
}
