import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logoHeader from "../assets/logo_header.png";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut, setUser } = use(AuthContext);
  // console.log(user);

  const navigate = useNavigate();
  // console.log(user?.photoURL);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink className="py-3" to="/">
        Home
      </NavLink>
      {user && (
        <NavLink className="py-3" to="/about">
          About
        </NavLink>
      )}

      <NavLink className="py-3" to="/faq">
        FAQ
      </NavLink>
      {user && (
        <NavLink className="py-3" to="/myprofile">
          My Profile
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
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
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img className="w-8" src={logoHeader} alt="logo" />
          <a className="text-xl font-extrabold text-[#236e85]">
            Job <span className="text-[#99ddff]">Jolt</span>
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        {/* <ul className="menu menu-horizontal px-1 space-x-4 ">{links}</ul> */}
      </div>
      <div className="navbar-end space-x-4">
        <ul className=" menu menu-horizontal hidden sm:hidden md:hidden lg:hidden xl:block px-1 space-x-4">
          {links}
        </ul>
        {user ? (
          <>
            <Link
              to="/myprofile"
              className="w-9 h-9 rounded-full overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src={`${user ? user.photoURL : ""}`}
              />
            </Link>

            <Link
              to="/"
              onClick={handleLogOut}
              className="btn bg-gray-800 text-white "
            >
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/auth/signin" className="btn btn-active btn-info">
              Log In
            </Link>
            <Link to="/auth/signup" className="btn btn-outline btn-info">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
