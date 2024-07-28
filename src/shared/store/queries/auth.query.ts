import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { AuthService } from "services/AuthService";
import { UserService } from "services/userService";
import { authApiUrl } from "shared/constants";
import { setTokenFromStorage } from "shared/helpers/localStorage";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: authApiUrl,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse | ErrorResponse, Login>({
      queryFn: async ({ email, password }) => {
        try {
          const res = await AuthService.login({ email, password });
          if (res) {
            // setTokenFromStorage(res as LoginResponse);
            return { data: res };
          }

          return { data: res };
        } catch (error: any) {
          return {
            error: error.response?.data || error.message,
          };
        }
      },
      invalidatesTags: ["Auth"],
    }),
    passwordRecovery: builder.mutation<ServerResponse | ErrorResponse, PasswordRecovery>({
      queryFn: async (data) => {
        try {
          const res = await AuthService.passwordRecovery(data);
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response.data.errors,
          };
        }
      },
    }),
    createPassword: builder.mutation<ServerResponse | ErrorResponse, PasswordCreate>({
      queryFn: async (data) => {
        try {
          const res = await AuthService.passwordCreate(data);
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response.data,
          };
        }
      },
    }),
    logout: builder.mutation<ServerResponse, void>({
      queryFn: async () => {
        try {
          const res = await AuthService.logout();
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response.data.errors,
          };
        }
      },
      invalidatesTags: ["Auth"],
    }),
    checkPasswordVerify: builder.mutation<ServerResponse | ErrorResponse, { token: string }>({
      queryFn: async (data) => {
        try {
          const res = await AuthService.checkPasswordVerify(data);
          return { data: res };
        } catch (error: any) {
          return {
            error: error.response.data.errors,
          };
        }
      },
    }),
    getUser: builder.query<Model.User | ErrorResponse, void>({
      queryFn: async () => {
        try {
          const res = await UserService.getUser();

          return { data: res };
        } catch (error: any) {
          return {
            error: error.response.data || error.message,
          };
        }
      },
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  usePasswordRecoveryMutation,
  useCreatePasswordMutation,
  useLogoutMutation,
  useCheckPasswordVerifyMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
} = authApi;
