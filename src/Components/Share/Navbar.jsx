import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    // const user: boolean = false;
    const navItem =
        <>
            <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/">Home</NavLink></li>
            <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/write">Write</NavLink></li>
            <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/membership">Membership</NavLink></li>
            <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/about">About Us</NavLink></li>
            <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/contact">Contact Us</NavLink></li>
        </>
    return (
        <div className="navbar bg-[#0e2a47] text-white font-semibold md:px-10 shadow-xl
        top-0  w-full z-50 transition-transform transform scroll duration-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm bg-[#0e2a47] dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {
                            navItem
                        }
                    </ul>
                </div>

                <Link to="/" className="w-40"><img src="logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center justify-center gap-4 px-1">
                    {
                        navItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center justify-center gap-4">
                    <Link to="/login" className="hover:text-info hover:transition-colors hover:duration-500">Sign In</Link>
                    <Link to="/login" className="hidden lg:block bg-[#e73635] text-base-100 p-3 rounded-lg hover:bg-info hover:transition-colors
                    hover:duration-500">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;