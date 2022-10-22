import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import News from "../Pages/News/News";
import ResetPassword from "../Pages/Auth/ResetPassowrd/ResetPassword";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import VerifyEmail from "../Pages/Auth/VerifyEmail/VerifyEmail";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Pages/Profile/Profile";
import VerifyEmailRoute from "./VerifyEmailRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`https://hussy-news-server.vercel.app/all-news`)
            },
            {
                path: "/category/:id",
                element: <PrivateRoutes> <Category></Category> </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://hussy-news-server.vercel.app/category/${params.id}`)

            },
            {
                path: "/news/:id",
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://hussy-news-server.vercel.app/news/${params.id}`)
            },
            {
                path: "/profile",
                element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>,

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
                element: <VerifyEmailRoute> <VerifyEmail></VerifyEmail></VerifyEmailRoute>
            },
        ]
    },
]);