import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      state.totalQuantity += 1;

      if (!existingItem) {
        state.cartItems.push({ ...item, quantity: 1 });
      } else {
        existingItem.quantity++;
      }

      state.totalPrice += item.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
