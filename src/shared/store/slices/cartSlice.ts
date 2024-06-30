import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import { loadStateFromLocalStorage, saveStateToLocalStorage } from "shared/helpers/localStorage";

const initialState: CartState = loadStateFromLocalStorage();

const updateTotals = (state: CartState) => {
  state.subtotal = state.cartList.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  state.totalQuantity = state.cartList.reduce((sum, item) => sum + item.quantity, 0);
  state.total = state.subtotal;
  saveStateToLocalStorage(state);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Model.Product>) => {
      const itemIndex = state.cartList.findIndex((item: Model.Product) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity++;
      } else {
        state.cartList.push({ ...payload, quantity: 1 });
      }
      updateTotals(state);
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    removeFromCart: (state, { payload }: PayloadAction<number>) => {
      state.cartList = state.cartList.filter((item: Model.Product) => item.id !== payload);
      updateTotals(state);
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    incrementQuantity: (state, { payload }: PayloadAction<number>) => {
      const itemIndex = state.cartList.findIndex((item: Model.Product) => item.id === payload);
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity++;
        updateTotals(state);
        localStorage.setItem("cartList", JSON.stringify(state.cartList));
      }
    },
    decrementQuantity: (state, { payload }: PayloadAction<number>) => {
      const itemIndex = state.cartList.findIndex((item: Model.Product) => item.id === payload);
      if (itemIndex >= 0 && state.cartList[itemIndex].quantity > 1) {
        state.cartList[itemIndex].quantity--;
        updateTotals(state);
        localStorage.setItem("cartList", JSON.stringify(state.cartList));
      } else if (itemIndex >= 0 && state.cartList[itemIndex].quantity === 1) {
        state.cartList.splice(itemIndex, 1);
        updateTotals(state);
        localStorage.setItem("cartList", JSON.stringify(state.cartList));
      }
    },
    clearCart: (state) => {
      state.cartList = [];
      updateTotals(state);
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    recalculateTotals: (state) => {
      updateTotals(state);
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, recalculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
