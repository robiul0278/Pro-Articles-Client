
import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUtensils } from 'react-icons/fa';



const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    const isAdmin = false;

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
                                                to="/dashboard/adminHome"

                                                className="flex items-center space-x-2 "
                                            >
                                                <FaHome />
                                                <span className="font-bold">Admin Home</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manageClasses"

                                                className="flex items-center space-x-2"
                                            >
                                                <FaUtensils />
                                                <span className="font-bold">Manage Articles</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manageUsers"

                                                className="flex items-center space-x-2 "
                                            >
                                                <FaWallet />
                                                <span className="font-bold">Manage Users</span>
                                            </NavLink>
                                        </li>
                                    </> :
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard/studentHome"

                                                className="flex items-center space-x-2 "
                                            >
                                                <FaHome />
                                                <span className="font-bold">Student Home</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/selectedClasses"

                                                className="flex items-center space-x-2"
                                            >
                                                <FaUtensils />
                                                <span className="font-bold">My Articles</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/enrolledClasses"

                                                className="flex items-center space-x-2 "
                                            >
                                                <FaWallet />
                                                <span className="font-bold">Update Article</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/paymentHistory"

                                                className="flex items-center space-x-2 "
                                            >
                                                <FaWallet />
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