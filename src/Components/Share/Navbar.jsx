import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user)


  const handleLogOut = () => {
    logOut();
  }
  // const user: boolean = false;
  const navItem =
    <>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/">Home</NavLink></li>
      {/* <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/write">Write</NavLink></li> */}
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/membership">Membership</NavLink></li>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/about">About Us</NavLink></li>
      <li><NavLink className="hover:text-info px-2 py-1 rounded-md hover:transition-colors
            hover:duration-500" to="/contact">Contact Us</NavLink></li>
    </>
  return (
    <div className="navbar bg-white text-black   font-semibold md:px-10 shadow-xl
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

        <Link to="/" className="w-40 text-error font-bold text-3xl"><img src="logo." alt="" /> <h1 >ProWriter</h1></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center justify-center gap-4 px-1">
          {
            navItem
          }
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-bottom z-10  dropdown-end">
          <label tabIndex={0} className=" m-1">
             <div className="avatar">
               <div className="w-10 rounded-full ring ring-error  ring-offset-base-100 ring-offset-2">
                 <img src={user?.photoURL} />
               </div>
             </div>
          </label>
          <ul tabIndex={0} className="menu-md menu text-black bg-white dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
          <li><Link to='/write'>Write</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><NavLink  onClick={handleLogOut}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Out</NavLink></li>
            
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