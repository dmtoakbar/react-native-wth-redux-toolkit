import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.cartData[existingIndex].quantity += 1;
      } else {
        state.cartData.push({ ...action.payload, quantity: 1 });
      }

      // Update total
      state.totalAmount = state.cartData.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const existingIndex = state.cartData.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        if (state.cartData[existingIndex].quantity > 1) {
          state.cartData[existingIndex].quantity -= 1;
        } else {
          state.cartData.splice(existingIndex, 1);
        }
      }

      // Update total
      state.totalAmount = state.cartData.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    clearCart: () => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
