import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import MyProfile from "./components/MyProfile";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Error404 from "./components/Error404";
import WhyChooseUs from "./components/WhyChooseUs ";

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
  {
    path: "/*",
    Component: Error404,
  },
]);

export default router;
