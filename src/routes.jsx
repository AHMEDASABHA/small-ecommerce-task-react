import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/products/home_page";
import AuthLayout from "./components/pages/auth/auth_layout";
import Login from "./components/pages/auth/login";
import RegisterForm from "./components/pages/auth/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <RegisterForm />,
          },
        ],
      },
    ],
  },
]);
