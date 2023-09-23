import useAdmin from '../Hooks/useAdmin';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaUsers } from 'react-icons/fa';
import { MdArticle, MdPayment } from 'react-icons/md';
import { BsPersonSquare } from 'react-icons/bs';

const Dashboards = () => {
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Navbar Title</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><a>Navbar Item 1</a></li>
                            <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                            {
                                isAdmin?.role === 'admin' ?
                                    <>
                                        <li><h1 className="text-center text-2xl font-semibold">Admin Dashboard</h1></li>
                                        <hr />
                                        <li>
                                            <NavLink
                                                to="/dashboard/adminHome"

                                                className="flex items-center space-x-2"
                                            >
                                                <BsPersonSquare />
                                                <span className="font-bold">Dashboard Profile</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/write"

                                                className="flex items-center space-x-2"
                                            >
                                                <MdArticle />
                                                <span className="font-bold">Write Article</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manageArticle"

                                                className="flex items-center space-x-2"
                                            >
                                                <MdArticle />
                                                <span className="font-bold">Manage Articles</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manageUsers"

                                                className="flex items-center space-x-2 "
                                            >
                                                <FaUsers />
                                                <span className="font-bold">Manage Users</span>
                                            </NavLink>
                                        </li>
                                    </> :
                                    <>
                                        <li><h1 className="text-center text-2xl font-semibold">User Dashboard</h1></li>
                                        <hr />
                                        <li>
                                            <NavLink
                                                to="/dashboard/userHome"

                                                className="flex items-center space-x-2"
                                            >
                                                <BsPersonSquare />
                                                <span className="font-bold">Dashboard Profile</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/write"

                                                className="flex items-center space-x-2"
                                            >
                                                <MdArticle />
                                                <span className="font-bold">Write Article</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/myArticle"

                                                className="flex items-center space-x-2"
                                            >
                                                <MdArticle />
                                                <span className="font-bold">My Articles</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/paymentHistory"

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
    );
};

export default Dashboards;