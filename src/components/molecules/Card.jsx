import React, { useState } from "react";

export default function Card({ cards, deleteCard, updateCard }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const startEdit = (card) => {
    setEditId(card.id);
    setEditTitle(card.title);
    setEditDescription(card.description);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const saveEdit = (id) => {
    updateCard(id, { title: editTitle, description: editDescription });
    cancelEdit();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={card.image}
                alt="image"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              {editId === card.id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => saveEdit(card.id)}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={card.authorImage}
                        alt="avatar"
                        className="rounded-full w-8 h-8"
                      />
                      <p className="text-sm text-gray-600">{card.authorName}</p>
                    </div>
                    <p className="text-green-500 text-lg font-semibold">
                      {card.price}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{card.position}</p>
                  <div className="flex mt-2">
                    <span className="text-yellow-500">{card.rating}</span>
                    <span className="underline text-gray-500 text-sm">
                      {card.ratingCount}
                    </span>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() => startEdit(card)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCard(card.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
