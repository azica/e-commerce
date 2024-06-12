import { FC } from "react";

declare global {
  namespace Model {
    interface User {
      id: number;
      name: string;
      avatar: string | null;
      role: "customer" | "admin";
      email?: string | null;
      creationAt?: string;
    }
  }
}
