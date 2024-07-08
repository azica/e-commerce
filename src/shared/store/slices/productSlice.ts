import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as Model.Product[],
  gridLayout: "grid1"
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Model.Product[]>) => {
      state.products = payload;
    },
    setGridLayout: (state, { payload }: PayloadAction<string>) => {
      state.gridLayout = payload;
    }
  },
});

export const { setProducts, setGridLayout } = productSlice.actions;

export default productSlice.reducer;
