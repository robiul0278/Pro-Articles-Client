import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import useAdmin from "../../Hooks/useAdmin";
import { useContext, useEffect } from "react";
import { ThemContext } from "../../Routes/ThemProvider";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { FaLanguage } from 'react-icons/fa';
import { useSelector } from "react-redux";





// eslint-disable-next-line react/prop-types
const Navbar = ({ dark, toggle }) => {
  const { t, i18n } = useTranslation(["navbar"]);
  const {logOut } = useAuth();
  const {user} = useSelector((state) => state.auth)
  const [isAdmin] = useAdmin();
  const [{ theme }] = useContext(ThemContext)


  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    console.log(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };
  // console.log(isAdmin)
  // const isAdmin = true;

  const DashboardLink = () => {
    if (isAdmin?.role === "admin") {
      return (
        <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
      );
    } else {
      return (
        <li><Link to="/dashboard/userHome">Dashboard</Link></li>
      );
    }
    // return null;
  };


  const handleLogOut = () => {
    logOut();
  }
  // const user: boolean = false;
  const navItem =
    <>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/">{t("Home")}</NavLink></li>
      {/* <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/write">Write</NavLink></li> */}
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/membership">Membership</NavLink></li>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/about">{t("About Us")}</NavLink></li>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/contact">Contact Us</NavLink></li>
      <li>
        <div className="flex items-center gap-2">
          <FaLanguage className="text-4xl" /><select
            className="bg-white font-bold"
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </li>
    </>
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="navbar bg-white text-black   font-semibold md:px-10 shadow-xl
        top-0  w-full z-50 transition-transform transform scroll duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm text-black bg-white dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            {
              navItem
            }
          </ul>
        </div>

        <Link to="/" className="w-44 font-bold text-3xl"><img src="logo.png" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center justify-center gap-4 px-1">
          {
            navItem
          }
        </ul>
      </div>
      <div className="navbar-end">
        <button className="mr-5" onClick={toggle}>{dark ? "Dark" : "light"}</button>

        {user ? (
          <div className="dropdown dropdown-bottom z-10  dropdown-end">
            <label tabIndex={0} className=" m-1">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-error  ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </label>
            <ul tabIndex={0} className="menu-md menu text-black bg-white dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-60">
              <div className="card-body items-center text-center">
                <img src={user?.photoURL} alt="avatar"
                  className="rounded-full" style={{ width: '90px' }} />
                <FontAwesomeIcon icon={faPenToSquare} />
                <h5 className="">{user?.displayName}</h5>
              </div>
              <li><Link to='/bookMark'>BookMark</Link></li>
              {DashboardLink()}
              {/* <li><Link to='/dashboard/'>Dashboard</Link></li> */}
              <li><NavLink onClick={handleLogOut}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Out</NavLink></li>

            </ul>
          </div>
        ) : (
          <div>
            <NavLink to="/login" className="btn btn-error text-white font-bold">
              Login
            </NavLink>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;