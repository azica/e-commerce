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
  async logout(): Promise<void> {
    clearLocalStorage();
    const res = await $api.postForm(Endpoints.LOGOUT);
    // return res.data;
  },
  async checkPasswordVerify(data: { token: string }): Promise<ServerResponse & ErrorResponse> {
    const res = await $api.post<ServerResponse & ErrorResponse>(Endpoints.PASSWORD_TOKEN_VERIFY, data);
    return res.data;
  },
};
