import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import { loadStateFromLocalStorage, saveStateToLocalStorage } from "shared/helpers/localStorage";

const initialState: CartState = loadStateFromLocalStorage<CartState>("cartState", {
  cartList: [],
  subtotal: 0,
  totalQuantity: 0,
  total: 0,
  shippingCost: 0,
  completionStatus: {
    shopping: false,
    checkout: false,
    order: false,
  },
});

const updateTotals = (state: CartState) => {
  state.subtotal = Number(state.cartList.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2));
  state.totalQuantity = state.cartList.reduce((sum, item) => sum + item.quantity, 0);
  state.total = state.subtotal + state.shippingCost;
  saveStateToLocalStorage("cartState", state);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Model.CartItem>) => {
      const itemIndex = state.cartList.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity++;
      } else {
        state.cartList.push({ ...payload, quantity: 1 });
      }
      updateTotals(state as CartState);
    },
    removeFromCart: (state, { payload }: PayloadAction<number>) => {
      state.cartList = state.cartList.filter((item) => item.id !== payload);
      updateTotals(state as CartState);
    },
    incrementQuantity: (state, { payload }: PayloadAction<Model.CartItem>) => {
      const itemIndex = state.cartList.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.cartList[itemIndex].quantity++;
      } else {
        state.cartList.push({ ...payload, quantity: 1 });
      }
      updateTotals(state as CartState);
    },
    decrementQuantity: (state, { payload }: PayloadAction<number>) => {
      const itemIndex = state.cartList.findIndex((item) => item.id === payload);
      if (itemIndex >= 0 && state.cartList[itemIndex].quantity > 1) {
        state.cartList[itemIndex].quantity--;
      } else if (itemIndex >= 0 && state.cartList[itemIndex].quantity === 1) {
        state.cartList.splice(itemIndex, 1);
      }
      updateTotals(state as CartState);
    },
    clearCart: (state) => {
      state.cartList = [];
      updateTotals(state as CartState);
    },
    recalculateTotals: (state) => {
      updateTotals(state as CartState);
    },
    setShippingCost: (state, { payload }: PayloadAction<number>) => {
      state.shippingCost = payload;
      updateTotals(state as CartState);
    },
    setCompletionStatus: (state, { payload }: PayloadAction<{ step: CompletionStatus; status: boolean }>) => {
      const { step, status } = payload;
      state.completionStatus[step] = status;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  recalculateTotals,
  setShippingCost,
  setCompletionStatus,
} = cartSlice.actions;

export default cartSlice.reducer;
