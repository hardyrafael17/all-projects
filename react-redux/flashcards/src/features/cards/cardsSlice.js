import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard(state, action) {
            state.cards = { ...state.cards, [action.payload.id]: action.payload }
        }
    }
});

export const addCard = payload => ({type: "cards/addCard", payload})
export default cardsSlice.reducer;
export const selectCards = state => state.cards.cards;
