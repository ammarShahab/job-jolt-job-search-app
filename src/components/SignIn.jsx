import React, { use, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    createLogin,
    googleSignIn,
    setUser,
    provider,
    setLoading,
    forgetPassword,
  } = use(AuthContext);
  // console.log(createLogin);
  // console.log(provider);

  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location);

  const emailRef = useRef();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // console.log(googleSignIn);

    createLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        setErrorMessage("");
        if (location?.state) {
          navigate(location.state);
          // navigate(location?.state ? location.state : "/");
        } else {
          navigate("/");
        }

        toast.success("Logged In Successfully");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
        if (location?.state) {
          navigate(location.state);
          // navigate(location?.state ? location.state : "/");
        } else {
          navigate("/");
        }
        toast.success("Logged In Successfully");
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handlePassword = () => {
    const email = emailRef.current.value;
    // console.log(email);

    forgetPassword(email)
      .then(() => toast.success("A Password reset email has sent"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-7">
      <Helmet>
        <title>Job Jolt | Sign In</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Please Log In
        </h2>
        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              ref={emailRef}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
          <p className=" text-xs text-red-400">{errorMessage}</p>
        </form>
        <div className="flex items-center justify-between text-sm">
          <Link
            onClick={handlePassword}
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex justify-center items-center gap-2 w-full px-4 py-2 border rounded-lg hover:bg-gray-100 "
          >
            <FcGoogle size={20} /> Continue with Google
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?
          <Link to="/auth/signUp" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
