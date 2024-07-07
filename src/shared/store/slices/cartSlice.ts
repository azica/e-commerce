import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage, saveStateToLocalStorage } from "shared/helpers/localStorage";


const initialState: CartState = loadStateFromLocalStorage<CartState>("cartState", {
  cartList: [],
  subtotal: 0,
  totalQuantity: 0,
  total: 0,
});

const updateTotals = (state: CartState) => {
  state.subtotal = +state.cartList.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  state.totalQuantity = state.cartList.reduce((sum, item) => sum + item.quantity, 0);
  state.total = state.subtotal;
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
      console.log(payload)
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
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, recalculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
