import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as Model.Product[],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Model.Product[]>) => {
      state.products = payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
