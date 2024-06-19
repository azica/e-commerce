import { Endpoints } from "api/endpoints";
import { clearLocalStorage } from "shared/helpers/localStorage";

import $api, { $withoutTokenApi } from "../api";

export const AuthService = {
  async login({ email, password }: Login): Promise<LoginResponse | ErrorResponse> {
    const res = await $withoutTokenApi.post<LoginResponse & ErrorResponse>(Endpoints.LOGIN, {
      email,
      password,
    });
    return res.data;
  },
  async passwordRecovery(data: PasswordRecovery): Promise<ServerResponse | ErrorResponse> {
    const res = await $api.post<ServerResponse & ErrorResponse>(Endpoints.PASSWORD_RECOVERY, data);
    return res.data;
  },
  async passwordCreate(data: PasswordCreate): Promise<ServerResponse | ErrorResponse> {
    const res = await $api.post<ServerResponse & ErrorResponse>(Endpoints.FORGET_PASSOWRD, data);
    return res.data;
  },
  logout(): Promise<ServerResponse> {
    clearLocalStorage();
    return new Promise<ServerResponse>((resolve) => {
      setTimeout(() => {
        resolve({
          statusCode: 200,
          message: "Logged out successfully",
        });
      }, 1000);
    });
  },
  async checkPasswordVerify(data: { token: string }): Promise<ServerResponse & ErrorResponse> {
    const res = await $api.post<ServerResponse & ErrorResponse>(Endpoints.PASSWORD_TOKEN_VERIFY, data);
    return res.data;
  },
};
