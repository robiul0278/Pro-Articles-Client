import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AddReview from "../Page/Home/Review/AddReview";
import AddPost from "../Page/Write/AddPost";
import Contact from "../Page/Home/Contacts/Contact";
import Login from "../Page/FirebaseAuth/Login/Login";
import Register from "../Page/FirebaseAuth/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
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
                path: '/addPost',
                element: <AddPost></AddPost>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
]);
export default router;