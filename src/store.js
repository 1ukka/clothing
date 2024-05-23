import { create } from "zustand";

const useAppStore = create((set) => ({
  item: {
    color: "",
    size: "",
    quantity: 1,
  },
  cart: [],
  setItem: (item) => set({ item }),
  updateItem: (key, value) =>
    set((state) => ({ item: { ...state.item, [key]: value } })),
  addToCart: () =>
    set((state) => ({
      cart: [...state.cart, state.item],
    })),
}));

export default useAppStore;
