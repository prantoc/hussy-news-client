import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import ResetPassword from "../Pages/ResetPassowrd/ResetPassword";
import SignUp from "../Pages/SignUp/SignUp";
import VerifyEmail from "../Pages/VerifyEmail/VerifyEmail";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/all-news`)
            },
            {
                path: "/category/:id",
                element: <PrivateRoutes> <Category></Category> </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: "/news/:id",
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/reset-password",
                element: <ResetPassword></ResetPassword>
            },
            {
                path: "/verify-email",
                element: <VerifyEmail></VerifyEmail>
            },
        ]
    },
]);