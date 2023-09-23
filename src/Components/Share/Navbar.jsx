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
  const { logOut } = useAuth();
  const { user } = useSelector((state) => state.auth)
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
    <ul className="flex items-center">
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/">{t("Home")}</NavLink></li>
      {/* <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/write">Write</NavLink></li> */}
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/membership">{t("Membership")}</NavLink></li>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/about">{t("About Us")}</NavLink></li>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/contact">{t("Contact Us")}</NavLink></li>
      <li>
        <div className="flex items-center gap-2">
          <FaLanguage className="text-4xl" /><select
            style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
            className="bg-white font-bold"
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="bn">Bangla</option>
          </select>
        </div>
      </li>
    </ul>



  const navDrop =
    <ul className="">
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
        hover:duration-500" to="/">{t("Home")}</NavLink></li>
      {/* <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
        hover:duration-500" to="/write">Write</NavLink></li> */}
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
        hover:duration-500" to="/membership">{t("Membership")}</NavLink></li>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
        hover:duration-500" to="/about">{t("About Us")}</NavLink></li>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
        hover:duration-500" to="/contact">{t("Contact Us")}</NavLink></li>
      <li>
        <div className="flex items-center gap-2">
          <FaLanguage className="text-4xl" /><select
            style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
            className="bg-white font-bold"
            value={localStorage.getItem("i18nextLng")}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="bn">Bangla</option>
          </select>
        </div>
      </li>
    </ul>
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="navbar bg-white text-black   font-semibold md:px-10 shadow-xl
        top-0  w-full  transition-transform transform scroll duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm text-black bg-white dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            {
              navDrop
            }
          </ul>
        </div>

        <Link to="/" className="w-44 font-bold text-3xl"><img src="logo.png" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex menu items-center justify-center gap-4 px-1">
          {
            navItem
          }
        </div>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate mr-5">
          <input onClick={toggle} type="checkbox" />
          {
            dark ?
              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
              :
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          }
        </label>
        {user ? (
          <div className="dropdown dropdown-bottom dropdown-end ">
            <label tabIndex={0} className=" m-1">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-error  ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </label>
            <ul tabIndex={0} className="menu-md menu z-50 text-black bg-white dropdown-content mt-3 p-2 shadow rounded-box w-60">
              <div className="card-body items-center text-center">
                <img src={user?.photoURL} alt="avatar"
                  className="rounded-full" style={{ width: '90px' }} />
                <FontAwesomeIcon icon={faPenToSquare} />
                <h5 className="">{user?.displayName}</h5>
              </div>
              <li><Link to='/bookMark'>Bookmark</Link></li>
              {DashboardLink()}
              {/* <li><Link to='/dashboard/'>Dashboard</Link></li> */}
              <li><NavLink onClick={handleLogOut}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Out</NavLink></li>

            </ul>
          </div>
        ) : (
          <div>
            <NavLink to="/login" className="btn btn-error text-white font-bold">
              {t("login")}
            </NavLink>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;