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
                element: <AddReview></AddReview>,
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
                element: <WriteArticle></WriteArticle>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
]);
export default router;