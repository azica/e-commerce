import Achievements from "pages/Achievements";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import Main from "pages/Main";
import PasswordRecovery from "pages/PasswordRecovery";
import Payment from "pages/Payment";
import Schedule from "pages/Schedule";

import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import { AuthWrapper } from "pages/Auth/AuthWrapper/AuthWrapper";

export const basicPaths = [
  {
    path: "/",
    id: 1,
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
  },
  {
    path: "/schedule",
    id: 2,
    element: (
      <PrivateRoute>
        <Schedule />
      </PrivateRoute>
    ),
  },
  {
    path: "/payment",
    id: 3,
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
  {
    path: "/achievements",
    id: 4,
    element: (
      <PrivateRoute>
        <Achievements />
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    id: 5,
    element: <AuthWrapper />,
    children: [
      { id: 1, path: "login", element: <Login /> },
      { id: 2, path: "register", element: <Register /> },
    ]
  },
  {
    path: "/register",
    id: 6,
    element: (
      <ProtectedRoute>
        <Register />
      </ProtectedRoute>
    ),
  },
  {
    path: "/password-recovery",
    id: 7,
    element: (
      <ProtectedRoute>
        <PasswordRecovery />
      </ProtectedRoute>
    ),
  },
];
