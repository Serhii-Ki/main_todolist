import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App.tsx";
import TodoPage from "../pages/TodoPage.tsx";
import SignIn from "../pages/signIn/SignIn.tsx";
import SignUp from "../pages/signUp/SignUp.tsx";


export const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children:[
    {
      index: true,
      element: <Navigate to="/signin"/>,
    },
    {
      path: '/todolist',
      element: <TodoPage/>
    },
    {
      path: '/signin',
      element: <SignIn/>
    },
    {
      path: '/signup',
      element: <SignUp/>
    }
  ]
}])