import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App.tsx";
import AuthPage from "../pages/auth/AuthPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="/auth" replace />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
    ],
  },
]);
