import { createSlice } from '@reduxjs/toolkit';

const postalSlice = createSlice({
    name: 'postal',
    initialState: {
        gift: null,
        letter: null
    },
    reducers: {
        setGift: (state, action) => {
            state.gift = action.payload; // sets gift from dispatched string
        },
        setLetter: (state, action) => {
            state.letter = action.payload; // sets gift from dispatched string
        },
    },
});

export const { setGift, setLetter } = postalSlice.actions;
export default postalSlice.reducer;