export declare global {
  type AuthData = {
    userId: number;
    avatar: string;
    role: Model.Role[];
    fullName: string;
    office?: number;
  };

  type AuthSlice = {
    authData: AuthData | null;
    successEmail: string;
  };

  type UserSlice = {
    user: Model.User | null;
    isAdmin: boolean | null;
    isSystemAdmin: boolean | null;
  };
}
