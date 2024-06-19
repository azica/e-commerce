import axios from "axios";

import { Endpoints } from "api/endpoints";
import { baseApiUrl } from "shared/constants";

export const CartService = {
  async getProductsFromCart(): Promise<GetProducts | ErrorResponse> {
    const res = await axios.get<GetProducts & ErrorResponse>(`${baseApiUrl}${Endpoints.GET_PRODUCTS}?limit=10`);
    return res.data;
  },
};
