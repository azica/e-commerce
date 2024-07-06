import { Endpoints } from "api/endpoints";

import $api, { $withoutTokenApi } from "../api";

export const UserService = {
  async getUser(): Promise<Model.User | ErrorResponse> {
    const res = await $api.get<Model.User & { error: ErrorObject }>(`${Endpoints.GET_USER}`);
    return res.data;
  },
  async createUser(data: CreateUser): Promise<Model.User | ErrorResponse> {

    const newUser = {
      avatar: "https://www.looper.com/img/gallery/the-ending-of-avatar-finally-explained/intro-1669817126.webp",
      ...data,
    };
    const res = await $withoutTokenApi.post<Model.User & { error: ErrorObject }>(`${Endpoints.CREATE_USER}`, newUser);
    return res.data;
  },
  // async updateUser(data: Model.UpdateUser): Promise<Model.User | ErrorResponse> {
  //     const res = await $api.put<Model.User & { error: ErrorObject }>(`${Endpoints.GET_USER}`, data);
  //     return res.data;
  // },
};
