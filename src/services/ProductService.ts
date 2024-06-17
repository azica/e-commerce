import axios from "axios";

import { Endpoints } from "api/endpoints";
import { shopApiUrl } from "shared/constants";

export const ProductService = {
  async getProducts(): Promise<GetProducts | ErrorResponse> {
    const res = await axios.get<GetProducts & ErrorResponse>(`${shopApiUrl}${Endpoints.GET_PRODUCTS}?limit=10`);
    return res.data;
  },
  async getCategories(): Promise<string[] | ErrorResponse> {
    const res = await axios.get<string[] & ErrorResponse>(`${shopApiUrl}${Endpoints.GET_CATEGORIES}`);
    return res.data;
  },
};
