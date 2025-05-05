import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h2>
        <form
          // onSubmit={handleRegister}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              //   onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              //   value={photoURL}
              //   onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {/* {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>} */}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>

        <div className="flex items-center justify-center gap-4">
          <button
            // onClick={handleGoogleLogin}
            className="flex justify-center items-center gap-2 w-full px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <FcGoogle size={20} /> Continue with Google
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/signIn" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
