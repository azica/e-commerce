import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ProductService } from "services/ProductService";
import { baseApiUrl } from "shared/constants";

import { setProducts } from "../slices/productSlice";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<GetProducts | ErrorResponse, void>({
      queryFn: async () => {
        try {
          const res = await ProductService.getProducts();
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response?.data || error.message,
          };
        }
      },
      providesTags: ["Product"],
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const { products } = data as GetProducts;
          dispatch(setProducts(products));
        } catch (error: any) {
          return error;
        }
      },
    }),
    getCategories: builder.query<string[] | ErrorResponse, void>({
      queryFn: async () => {
        try {
          const res = await ProductService.getCategories();
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response?.data || error.message,
          };
        }
      },
      providesTags: ["Product"],
    }),
    getAllProducts: builder.query<GetProducts | ErrorResponse, string>({
      queryFn: async (query) => {
        try {
          const res = await ProductService.getAllProducts(query);
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response?.data || error.message,
          };
        }
      },
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery, useGetAllProductsQuery } = productApi;
