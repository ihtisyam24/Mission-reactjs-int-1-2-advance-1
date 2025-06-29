import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://your-mockapi-url.com";

export const getCards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cards`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};

export const addCard = async (card) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cards`, card);
    return response.data;
  } catch (error) {
    console.error("Error adding card:", error);
    throw error;
  }
};

export const updateCard = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/cards/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating card:", error);
    throw error;
  }
};

export const deleteCard = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/cards/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting card:", error);
    throw error;
  }
};
