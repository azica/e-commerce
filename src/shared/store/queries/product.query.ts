import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductService } from "services/ProductService";
import { shopApiUrl } from "shared/constants";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: shopApiUrl,
    }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<Model.Product[] | ErrorResponse, void>({
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
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
