// postalStore.js
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const usePostalStore = create(
    devtools((set) => ({
        gift: null,
        letter: null,
        setGift: (gift) => set({ gift }, false, "postal/setGift"),
        setLetter: (letter) => set({ letter }, false, "postal/setLetter")
    }), { name: "SuperDuperZustandPostalStore" })
);