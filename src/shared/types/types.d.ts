import { FC } from "react";

declare global {
  namespace Model {
    interface User {
      id: number;
      username: string;
      email?: string | null;
      firstName: string;
      lastName: string;
      gender: string;
      image: string | null;
      token: string;
      refreshToken: string;
      role: "customer" | "admin";
      creationAt?: string;
    }

    interface Product {
      id: number;
      title: string;
      price: number;
      discountPercentage?: number;
      category: string;
      brand?: string;
      description: string;
      images: string[];
      thumbnail?: string;
      description?: string;
      rating: number;
    }

    interface Article {
      id: number;
      title: string;
      body: string;
      tags?: string[];
      image: string;
    }

    interface CartItem extends Model.Product {
      quantity: number;
    }
  }
}
