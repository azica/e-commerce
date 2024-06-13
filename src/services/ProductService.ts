import { Endpoints } from "api/endpoints";
import axios from "axios";
import { shopApiUrl } from "shared/constants";

export const ProductService = {
  async getProducts(): Promise<Model.Product[] | ErrorResponse> {
    const res = await axios.get<Model.Product[] & ErrorResponse>(`${shopApiUrl}${Endpoints.GET_PRODUCTS}?limit=5`,);
    return res.data;
  },
}