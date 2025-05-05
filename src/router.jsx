import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import MyProfile from "./components/MyProfile";

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
]);

export default router;
