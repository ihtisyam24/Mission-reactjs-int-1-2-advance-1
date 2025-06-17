import React, { useState } from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import Hero from "../components/molecules/Hero";
import Collection from "../components/molecules/Collection";
import Card from "../components/molecules/Card";
import Banner from "../components/molecules/Banner";

const Home = () => {
  // Initial data array of card objects
  const initialCards = [
    {
      id: 1,
      image: "src/assets/images/g1.jpg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau...",
      authorImage: "src/assets/images/prf1.png",
      authorName: "Jenna Ortega",
      price: "Rp 300K",
      position: "Senior Accountant di Gojek",
      rating: "⭐⭐⭐⭐",
      ratingCount: "3,5(86)",
    },
    {
      id: 2,
      image: "src/assets/images/g2.jpg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau...",
      authorImage: "src/assets/images/prf2.png",
      authorName: "Jenna Ortega",
      price: "Rp 300K",
      position: "Senior Accountant di Gojek",
      rating: "⭐⭐⭐⭐",
      ratingCount: "3,5(86)",
    },
    {
      id: 3,
      image: "src/assets/images/g4.jpg",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau...",
      authorImage: "src/assets/images/prf3.png",
      authorName: "Jenna Ortega",
      price: "Rp 300K",
      position: "Senior Accountant di Gojek",
      rating: "⭐⭐⭐⭐",
      ratingCount: "3,5(86)",
    },
    // Add more initial cards as needed
  ];

  const [cards, setCards] = useState(initialCards);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Add a new card
  const addCard = () => {
    if (newTitle.trim() === "" || newDescription.trim() === "") return;
    const newCard = {
      id: Date.now(),
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
    setCards([...cards, newCard]);
    setNewTitle("");
    setNewDescription("");
  };

  // Delete a card by id
  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  // Update a card by id
  const updateCard = (id, updatedData) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, ...updatedData } : card))
    );
  };

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
