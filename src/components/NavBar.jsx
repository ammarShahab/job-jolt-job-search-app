import React from "react";
import { Link, NavLink } from "react-router";
import logoHeader from "../assets/logo_header.png";
import { MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      <NavLink to="/faq">FAQ</NavLink>
      <NavLink to="/myprofile">My Profile</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <MdOutlineAccountCircle size={40}></MdOutlineAccountCircle>
        <Link to="/auth/signin" className="btn btn-active btn-info">
          Sign In
        </Link>
        <Link to="/auth/signup" className="btn btn-outline btn-info">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
