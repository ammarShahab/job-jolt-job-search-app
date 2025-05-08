import React, { use } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";
import footerImage from "../assets/logo_footer.png";
import { AuthContext } from "../context/AuthContext";

const Footer = () => {
  const { user } = use(AuthContext);
  return (
    <div className="mx-auto px-4 bg-[#d9e9f9] p-8 ">
      <div className="grid grid-cols-2 md:grid-cols-3 items-end">
        <div>
          <img className="w-8" src={footerImage} alt="logo" />
          <p className="mt-4">
            JobJolt is your ultimate job search platform, connecting talented
            individuals with top employers. Explore thousands of opportunities
            and ignite your career today!
          </p>
        </div>

        <div className="flex flex-col justify-start items-center ">
          <NavLink
            to="/"
            className="text-lg hover:text-[#236e85] transition duration-300"
          >
            Home
          </NavLink>
          {user && (
            <NavLink
              to="/about"
              className="text-lg hover:text-[#236e85] transition duration-300 "
            >
              About
            </NavLink>
          )}
          <NavLink
            to="/faq"
            className="text-lg hover:text-[#236e85] transition duration-300 "
          >
            FAQ
          </NavLink>
        </div>

        <div className="mt-5 space-y-4">
          <p className="text-left md:text-right">Follow Us on</p>
          <div className="flex md:justify-end space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-2xl hover:text-[#99ffff] transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-2xl hover:text-[#99ffff] transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-2xl hover:text-[#99ffff] transition duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} JobJolt. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
