import { Checkout } from "components/Checkout";
import { Shopping } from "components/Shopping";
import { AuthWrapper } from "pages/Auth/AuthWrapper/AuthWrapper";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import Blog from "pages/Blog";
import Cart from "pages/Cart";
import ContactUs from "pages/ContactUs";
import Dashboard from "pages/Dashboard";
import Main from "pages/Main";
import Order from "pages/Order";
import PasswordRecovery from "pages/PasswordRecovery";
import Product from "pages/Product";
import { Shop } from "pages/Shop";

import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import Redirect from "./Redirect";

export const basicPaths = [
  {
    path: "/",
    id: 1,
    element: <Main />,
  },
  {
    path: "shop",
    id: 2,
    element: <Shop />,
  },
  {
    path: "/",
    id: 5,
    element: <AuthWrapper />,
    children: [
      {
        id: 1,
        path: "login",
        element: (
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        id: 2,
        path: "register",
        element: (
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        ),
      },
      {
        id: 3,
        path: "password-recovery",
        element: (
          <ProtectedRoute>
            <PasswordRecovery />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "contact-us",
    id: 6,
    element: <ContactUs />,
  },
  {
    path: "blog",
    id: 7,
    element: <Blog />,
  },
  {
    path: "product/:id",
    id: 8,
    element: <Product />,
  },
  {
    id: 4,
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    id: 5,
    path: "cart",
    element: <Cart />,
    children: [
      {
        id: 0,
        path: "",
        element: <Redirect link="shopping" />,
      },
      {
        id: 1,
        path: "shopping",
        element: <Shopping />,
      },
      {
        id: 2,
        path: "checkout",
        element: <Checkout />,
      },
      {
        id: 3,
        path: "order",
        element: <Order />,
      },
    ],
  },
];
