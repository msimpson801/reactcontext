// store.js
import { configureStore } from '@reduxjs/toolkit';
import postalReducer from './postalSlice'; // adjust path if needed

export const myReduxStore = configureStore({
    reducer: {
        postal: postalReducer,
    },
});