import { AuthWrapper } from "pages/Auth/AuthWrapper/AuthWrapper";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import Blog from "pages/Blog";
import ContactUs from "pages/ContactUs";
import Main from "pages/Main";
import PasswordRecovery from "pages/PasswordRecovery";
import { Shop } from "pages/Shop";

import ProtectedRoute from "./ProtectedRoute";

export const basicPaths = [
  {
    path: "/",
    id: 1,
    element: <Main />,
  },
  {
    path: "/shop",
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
        path: "/password-recovery",
        element: (
          <ProtectedRoute>
            <PasswordRecovery />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/contact-us",
    id: 6,
    element: <ContactUs />,
  },
  {
    path: "/blog",
    id: 7,
    element: <Blog />,
  },
];
