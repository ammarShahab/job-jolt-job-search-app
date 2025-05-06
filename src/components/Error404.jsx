import React from "react";
import { Link } from "react-router";
import errorImg from "../assets/ERROR.jpg";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <img
          src={errorImg}
          alt="404 Error"
          className="mx-auto w-72 md:w-96 mb-6"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-3">404</h1>
        <p className="text-lg text-gray-600 mb-6">Oops! Page not found.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
