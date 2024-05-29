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
  addToCart: (newItem) =>
    set((state) => ({
      cart: [...state.cart, newItem],
    })),
  removeItem: (index) =>
    set((state) => {
      const newCart = [...state.cart];
      newCart.splice(index, 1);
      return { cart: newCart };
    }),
  updateCartItem: (index, updatedItem) =>
    set((state) => {
      const newCart = [...state.cart];
      newCart[index] = { ...newCart[index], ...updatedItem };
      return { cart: newCart };
    }),
}));

export default useAppStore;
