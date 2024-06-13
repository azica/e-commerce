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

    interface Rating { rate: number; count: number };

    interface Product {
      id: number;
      title: string;
      price: number;
      category: string;
      description: string;
      image: string;
      rating: Rating
      // thumbnail?: string;
      // images?: string[];
      // brand?: string;
      // stock?: number;
      // discountPercentage?: number;
      // rating?: number;
    };
  }
}
