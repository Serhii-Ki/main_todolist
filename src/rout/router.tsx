import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import AuthPage from "../pages/auth/AuthPage.tsx";
import TodoListPage from "../pages/todoListPage/TodoListPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "todolist",
        element: <TodoListPage />,
      },
    ],
  },
]);
