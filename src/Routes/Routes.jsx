import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import WriteArticle from "../Page/Write/WriteArticle";
import Contact from "../Page/Home/Contact/Contact";
import About from "../Page/About/About";
import Dashboard from "../Layout/Dashboard";
import Home from "../Page/Home/Home/Home";
import Login from "../FirebaseAuth/Login/Login";
import Register from "../FirebaseAuth/Register/Register";
import ManageArticle from "../Dashboard/AdminRoute/ManageArticle";
import ManageUsers from "../Dashboard/AdminRoute/ManageUsers";
import MyArticle from "../Dashboard/UsersRoute/MyArticle";
import AdminHome from "../Dashboard/AdminRoute/AdminHome";
import UserHome from "../Dashboard/UsersRoute/UserHome";
import ArticleDetails from "../Page/ArticleDetails/ArticleDetails";
import EditArticle from "../Page/Write/EditArticle";
import Bookmark from "../Page/Bookmark/Bookmark";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../Dashboard/UsersRoute/PaymentHistory";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Subscribe from "../Page/Membership/Subscribe";
import ManageAllArticle from "../Dashboard/AdminRoute/manageAllArticle";
import ArticleReview from "../Dashboard/AdminRoute/ArticleReview";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'subscribe',
                element: <Subscribe/>
            },
            {
                path: '/articleDetails/:id',
                element: <ArticleDetails></ArticleDetails>,
                loader: ({ params }) => fetch(`https://premium-articles-platform-sever.vercel.app/article/${params.id}`)
            },
            {
                path: 'bookMark',
                element: <Bookmark></Bookmark>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome />
            },
            {
                path: 'manageArticle',
                element: <ManageArticle />
            },
            {
                path: 'manageAllArticle',
                element: <ManageAllArticle />
            },
            {
                path: 'manageUsers',
                element: <ManageUsers />
            },
            {
                path:'/dashboard/review/:id',
                element:<ArticleReview/>,
                loader: ({ params }) => fetch(`https://premium-articles-platform-sever.vercel.app/article/${params.id}`)
            },
            {
                path: 'userHome',
                element: <UserHome />
            },
            {
                path: 'myArticle',
                element: <MyArticle />,
            },
            {
                path: 'write',
                element: <PrivateRoute><WriteArticle/></PrivateRoute>
            },
            {
                path:'paymentHistory',
                element: <PaymentHistory/>
            },
            {
                path: '/dashboard/articleDetails/:id',
                element: <ArticleDetails></ArticleDetails>,
                loader: ({ params }) => fetch(`https://premium-articles-platform-sever.vercel.app/article/${params.id}`)
            },
            {
                path: '/dashboard/editArticle/:id',
                element: <EditArticle />,
                loader: ({ params }) => fetch(`https://premium-articles-platform-sever.vercel.app/article/${params.id}`)
            }
        ]
    }
]);
export default router;