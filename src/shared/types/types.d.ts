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
  }
}
