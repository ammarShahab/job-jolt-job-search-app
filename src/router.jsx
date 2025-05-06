import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import MyProfile from "./components/MyProfile";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/signIn", element: <SignIn></SignIn> },
      { path: "/auth/signUp", element: <SignUp></SignUp> },
    ],
  },
  { path: "/*", element: <h1>Error404</h1> },
]);

export default router;
