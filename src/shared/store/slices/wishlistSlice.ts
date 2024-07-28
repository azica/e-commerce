import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import { loadStateFromLocalStorage, saveStateToLocalStorage } from "shared/helpers/localStorage";

interface WishlistState {
  wishList: Model.Product[];
}

const initialState: WishlistState = loadStateFromLocalStorage("wishlist", {
  wishList: [],
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<Model.Product>) => {
      state.wishList.push(payload);
      saveStateToLocalStorage("wishlist", state);
    },
    removeItem: (state, { payload }: PayloadAction<number>) => {
      state.wishList = state.wishList.filter((item) => item.id !== payload);
      saveStateToLocalStorage("wishlist", state);
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
