import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserService } from "services/userService";

import { BASE_API_URL } from "./constant";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  tagTypes: ["User", "Auth"],
  endpoints: (builder) => ({
    createUser: builder.mutation<Model.User | ErrorResponse, CreateUser>({
      queryFn: async (data) => {
        try {
          const res = await UserService.createUser(data);
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response?.data || error.message,
          };
        }
      },
      invalidatesTags: ["User", "Auth"],
    }),
    updateUser: builder.mutation<Model.User | ErrorResponse, void>({
      queryFn: async () => {
        try {
          const res = await UserService.getUser();
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response?.data || error.message,
          };
        }
      },
      invalidatesTags: ["User", "Auth"],
    }),
  }),
});

export const { useUpdateUserMutation, useCreateUserMutation } = userApi;
