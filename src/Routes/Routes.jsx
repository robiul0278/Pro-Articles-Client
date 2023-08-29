import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import AddReview from "../Page/Home/Review/AddReview";
import WriteArticle from "../Page/Write/WriteArticle";
import Contact from "../Page/Home/Contact/Contact";
import About from "../Page/About/About";
import Membership from "../Page/Membership/Membership";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageArticle from "../DashPage/AdminRoute/ManageArticle";
import ManageUsers from "../DashPage/AdminRoute/ManageUsers";
import MyArticle from "../DashPage/UsersRoute/MyArticle";
import Home from "../Page/Home/Home/Home";
import Login from "../FirebaseAuth/Login/Login";
import Register from "../FirebaseAuth/Register/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,

        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "review",
                element: <PrivateRoute><AddReview/></PrivateRoute>,
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'write',
                element: <PrivateRoute><WriteArticle/></PrivateRoute>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'membership',
                element: <Membership/>
            },

        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
            {
                path:'manageArticle',
                element: <ManageArticle/>
            },
            {
                path:'manageUsers',
                element: <ManageUsers/>
            },
            {
                path:'myArticle',
                element: <MyArticle/>,
            }
        ]
    }
]);
export default router;