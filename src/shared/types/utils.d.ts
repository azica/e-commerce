export declare global {
  type Routes = {
    path: string;
    id: number;
    element: JSX.Element;
    children?: {
      path: string;
      id: number;
      element: JSX.Element;
    }[];
  };

  type LoginType = "email" | "phone";

  type ErrorObject = {
    attr: string;
    code: string;
    detail: string;
  };

  type PasswordCreate = {
    password: string;
    token: string;
  };

  type PasswordRecovery = {
    email: string;
  };

  type CreateUser = {
    name: string;
    email: string;
    password: string;
    secondPassword?: string;
    avatar?: string;
  };

  type Login = {
    email: string;
    password: string;
  };

  type Tokens = {
    access_token: string;
    refresh_token: string;
  };

  type LoginResponse = {
    user: Model.User;
  } & Tokens;

  type ServerResponse = {
    statusCode: number;
    message: string;
  };

  type ErrorResponse = {
    errors: ErrorObject[] | ServerResponse;
  };

  interface FetchResponse {
    skip: number;
    limit: number;
    total: number;
  }

  interface GetProducts extends FetchResponse {
    products: Model.Product[];
  }

  interface GetPosts extends FetchResponse {
    posts: Module.Article[];
  }

  type ProductFilters = {
    category?: string;
    limit?: number;
    skip?: number;
    sortBy?: string;
  };
}
