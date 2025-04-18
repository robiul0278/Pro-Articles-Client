import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import useAdmin from "../../Hooks/useAdmin";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { logOut } = useAuth();
  const { user } = useSelector((state) => state.auth);
  const [isAdmin] = useAdmin();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut();
  };

  const DashboardLink = () => {
    if (isAdmin?.role === "admin") {
      return <li><Link to="/dashboard/adminHome" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>;
    } else {
      return <li><Link to="/dashboard/userHome" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>;
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/subscribe", label: "Membership" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src="https://www.freelogovectors.net/wp-content/uploads/2021/05/writer-logo-freelogovectors.net_-400x134.png" alt="Logo" className="w-24" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 font-medium">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="hover:text-blue-500 transition-colors duration-300 font-bold"
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* User Avatar / Login */}
        <div className="hidden md:block">
          {user ? (
            <div className="relative group">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer"
              />
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-lg shadow-md w-48 z-50">
                <div className="p-4 text-center">
                  <img src={user?.photoURL} alt="avatar" className="w-14 h-14 mx-auto rounded-full mb-2" />
                  <p className="text-sm font-semibold">{user?.displayName}</p>
                </div>
                <ul className="border-t">
                  <li><NavLink to="/bookMark" className="block px-4 py-2 hover:bg-gray-100">Bookmark</NavLink></li>
                  {DashboardLink()}
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 text-red-500"
                    >
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <NavLink to="/login" className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition">
              Login / Register
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 text-gray-700 font-medium">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="hover:text-indigo-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            {user ? (
              <div className="mt-4">
                <hr className="mb-2" />
                <div className="text-sm text-center mb-2">{user?.displayName}</div>
                <NavLink to="/bookMark" className="block py-1 hover:text-indigo-500">Bookmark</NavLink>
                {DashboardLink()}
                <button
                  onClick={() => {
                    handleLogOut();
                    setIsMenuOpen(false);
                  }}
                  className="text-red-500 mt-2"
                >
                  <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Out
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md mt-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
