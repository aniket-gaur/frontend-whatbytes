import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/features/cart/cart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
