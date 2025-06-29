import React, { useState, useEffect } from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import Hero from "../components/molecules/Hero";
import Collection from "../components/molecules/Collection";
import Card from "../components/molecules/Card";
import Banner from "../components/molecules/Banner";
import { getCards, addCard as apiAddCard, updateCard as apiUpdateCard, deleteCard as apiDeleteCard } from "../../services/api/api";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards();
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  // Add a new card
  const addCard = async () => {
    if (newTitle.trim() === "" || newDescription.trim() === "") return;
    const newCard = {
      image: "src/assets/images/g1.jpg", // default image
      title: newTitle,
      description: newDescription,
      authorImage: "src/assets/images/prf1.png",
      authorName: "New Author",
      price: "Rp 0",
      position: "New Position",
      rating: "⭐⭐⭐⭐",
      ratingCount: "0(0)",
    };
    console.log("Adding card with payload:", newCard);
    try {
      const addedCard = await apiAddCard(newCard);
      setCards([...cards, addedCard]);
      setNewTitle("");
      setNewDescription("");
    } catch (error) {
      console.error("Failed to add card:", error);
    }
  };

  // Delete a card by id
  const deleteCard = async (id) => {
    try {
      await apiDeleteCard(id);
      setCards(cards.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Failed to delete card:", error);
    }
  };

  // Update a card by id
  const updateCard = async (id, updatedData) => {
    try {
      const updatedCard = await apiUpdateCard(id, updatedData);
      setCards(
        cards.map((card) => (card.id === id ? updatedCard : card))
      );
    } catch (error) {
      console.error("Failed to update card:", error);
    }
  };

  if (loading) {
    return <div>Loading cards...</div>;
  }

  return (
    <>
      <HomeLayouts>
        <Hero />
        <Collection />
        {/* Add controls for adding a new card */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h2 className="text-xl font-semibold mb-2">Add New Card</h2>
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mr-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mr-2"
          />
          <button
            onClick={addCard}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <Card cards={cards} deleteCard={deleteCard} updateCard={updateCard} />
        <Banner />
      </HomeLayouts>
    </>
  );
};

export default Home;
