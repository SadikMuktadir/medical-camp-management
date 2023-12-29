import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import useData from "../../Hooks/useData";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [item] = useData();
  const handleLogOut = () => {
    logOut();
  };
  const navOption = (
    <>
      <li className="mr-3">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "",
              background: isActive ? "#8D5CF6" : "#FFF",
              padding: isActive ? "15px 30px" : "15px 35px",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-3">
        <NavLink
          to="/available"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "",
              background: isActive ? "#8D5CF6" : "#FFF",
              padding: isActive ? "15px 30px" : "15px 35px",
            };
          }}
        >
          Available Camps
        </NavLink>
      </li>
      <li className="mr-3">
        <NavLink
          to="/dashboard"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "",
              background: isActive ? "#8D5CF6" : "#FFF",
              padding: isActive ? "15px 30px" : "15px 35px",
            };
          }}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "",
              background: isActive ? "#8D5CF6" : "#FFF",
              padding: isActive ? "15px 30px" : "15px 35px",
            };
          }}
        >
          Contact Us
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/myCamp"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#FFF" : "",
              background: isActive ? "#8D5CF6" : "#FFF",
              padding: isActive ? "15px 30px" : "15px 35px",
            };
          }}
        >
          <div>
          <button className="flex">JoinCamp
            <div>+ {item.length}</div>
          </button>
          </div>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 my-[30px] rounded-[5px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow mr-3 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="text-[40px] font-bold">Medical Verse</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu mr-3 menu-horizontal px-1">{navOption}</ul>
        </div>
        {user ? (
          <>
            <div className="flex">
              <div className="flex justify-center items-center mr-2">
                <div className="h-[20px] w-[20px] mr-[10px]">
                  <img src={user.photoURL} referrerPolicy="no-referrer" />
                </div>
                <div className="text-black">{user.displayName}</div>
              </div>
              <div className="bg-[#8D5CF6]  mr-3 rounded-[5px] text-white font-bold">
                <button className="px-[30px] py-[15px]" onClick={handleLogOut}>
                  LogOut
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="navbar-end">
            <div className="bg-[#8D5CF6]  mr-3 rounded-[5px] text-white font-bold">
              <Link to="/login">
                <button className="px-[30px] py-[15px]">Login</button>
              </Link>
            </div>
            <div className="bg-[#8D5CF6] rounded-[5px] text-white font-bold">
              <Link to="/register">
                <button className="px-[30px] py-[15px]">Register</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
