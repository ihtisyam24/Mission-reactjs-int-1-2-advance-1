import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state: empty array for cards
const initialState = {
  cards: [],
};

// Create slice
const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    updateCard(state, action) {
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    },
    deleteCard(state, action) {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

// Export actions
export const { setCards, addCard, updateCard, deleteCard } = cardsSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
  },
});

export default store;
