
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from 'react-icons/fa';
import { MdArticle, MdPayment } from "react-icons/md";



const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    const isAdmin = true;

    return (
        <>
            <div className="flex min-h-screen max-w-7xl mx-auto">
                <div className="w-1/4 bg-white border-2">
                    <div className="p-5">
                        <ul className="space-y-10">
                            {
                                isAdmin ?
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard"

                                                className="flex items-center space-x-2"
                                            >
                                                <MdArticle />
                                                <span className="font-bold">Manage Articles</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard"

                                                className="flex items-center space-x-2 "
                                            >
                                                <FaUsers />
                                                <span className="font-bold">Manage Users</span>
                                            </NavLink>
                                        </li>
                                    </> :
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard"

                                                className="flex items-center space-x-2"
                                            >
                                                <MdArticle />
                                                <span className="font-bold">My Articles</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard"

                                                className="flex items-center space-x-2 "
                                            >
                                                <MdPayment />
                                                <span className="font-bold">Payment</span>
                                            </NavLink>
                                        </li>
                                    </>
                            }

                            <li>
                                <NavLink
                                    to="/"
                                    className="flex items-center space-x-2 "
                                >
                                    <FaHome />
                                    <span className="font-bold">Home</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" w-3/4 mx-auto bg-white">
                    <Outlet />

                </div>
            </div>
            <br />
        </>
    );
};

export default Dashboard;