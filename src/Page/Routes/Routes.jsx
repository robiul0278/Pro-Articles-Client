import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import AddReview from "../Home/Review/AddReview";
import Login from "../FirebaseAuth/Login/Login";
import Register from "../FirebaseAuth/Register/Register";
import WriteArticle from "../Write/WriteArticle";
import Contact from "../Home/Contact/Contact";
import About from "../About/About";
import PrivateRoute from "./PrivateRoute";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import Dashboard from "../../Layout/Dashboard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/review",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/write',
                element: <PrivateRoute><WriteArticle></WriteArticle></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/article/:id',
                element: <ArticleDetails></ArticleDetails>,
                loader: ({ params }) => fetch(`https://premium-articles-platform-sever.vercel.app/article/${params.id}`)
            },
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
    }
]);
export default router;