import { create } from "zustand";

const useAppStore = create((set) => ({
  item: {
    color: "",
    size: "",
    quantity: 1,
  },
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  setItem: (item) => set({ item }),
  updateItem: (key, value) =>
    set((state) => ({ item: { ...state.item, [key]: value } })),
  addToCart: (item) => set((state) => {
    const updatedCart = [...state.cart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { cart: updatedCart };
  }),
  removeItem: (index) => set((state) => {
    const updatedCart = state.cart.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { cart: updatedCart };
  }),
}));

export default useAppStore;
