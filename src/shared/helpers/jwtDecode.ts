import type { JwtPayload } from "jwt-decode";

import { jwtDecode } from "jwt-decode";

import { getTokensFromStorage } from "./localStorage";

interface JwtDecodeProps extends JwtPayload {
  user_id?: number;
}

export const getUserIdByJwt = (access?: string): number | undefined => {
  const token = access ? access : getTokensFromStorage()?.access_token;
  let userId: number | undefined;

  if (token) {
    const data = jwtDecode<JwtDecodeProps>(token);
    userId = data.user_id;
  }

  return userId;
};
