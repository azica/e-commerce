export declare global {
  type AuthData = {
    userId: number;
    avatar: string;
    role: Model.Role[];
    fullName: string;
    office?: number;
  };

  type AuthState = {
    authData: AuthData | null;
    successEmail: string;
  };

  type UserState = {
    user: Model.User | null;
    isAdmin: boolean | null;
    isSystemAdmin: boolean | null;
  };

  type CartState = {
    cartList: CartItem[];
    subtotal: number;
    total: number;
    totalQuantity: number;
  };
}
