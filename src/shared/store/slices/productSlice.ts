import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as Model.Product[],
  gridLayout: "grid1",
  loading: false
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Model.Product[]>) => {
      state.products = payload;
      state.loading = false;
    },
    setGridLayout: (state, { payload }: PayloadAction<string>) => {
      state.gridLayout = payload;
      state.loading = true;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const { setProducts, setGridLayout, setLoading } = productSlice.actions;

export default productSlice.reducer;
