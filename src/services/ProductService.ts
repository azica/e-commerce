import axios from "axios";

import { Endpoints } from "api/endpoints";
import { baseApiUrl } from "shared/constants";

export const ProductService = {
  async getProducts(): Promise<GetProducts | ErrorResponse> {
    const res = await axios.get<GetProducts & ErrorResponse>(`${baseApiUrl}${Endpoints.GET_PRODUCTS}?limit=10`);
    return res.data;
  },
  async getCategories(): Promise<string[] | ErrorResponse> {
    const res = await axios.get<string[] & ErrorResponse>(`${baseApiUrl}${Endpoints.GET_CATEGORIES}`);
    return res.data;
  },
  async getAllProducts(query: string): Promise<GetProducts | ErrorResponse> {
    const params = new URLSearchParams(query);
    const limit = params.get("limit") || "10";
    const skip = params.get("skip") || "0";
    const category = params.get("category");
    const sortBy = params.get("sortBy");

    let url = `${baseApiUrl}${Endpoints.GET_PRODUCTS}?limit=${limit}&skip=${skip}`;

    if (category) {
      url = `${baseApiUrl}${Endpoints.GET_PRODUCTS}/category/${category}?limit=${limit}&skip=${skip}`;
    }

    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }

    const res = await axios.get<GetProducts>(url);
    return res.data;
  },
  async getProduct(id: number): Promise<Model.Product | ErrorResponse> {
    const res = await axios.get<GetProducts & ErrorResponse>(`${baseApiUrl}${Endpoints.GET_PRODUCTS}/${id}`);
    return res.data;
  },
};
