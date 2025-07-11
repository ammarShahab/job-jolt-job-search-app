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
import CompanyDetailsPage from "./components/CompanyDetailsPage";
import PrivateRouter from "./provider/PrivateRouter";
import Loading from "./components/Loading";

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
        element: (
          <PrivateRouter>
            <About></About>,
          </PrivateRouter>
        ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRouter>
            <MyProfile></MyProfile>
          </PrivateRouter>
        ),
        // errorElement: <Error404></Error404>,
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
    loader: () => fetch("/jobs.json"),
    hydrateFallbackElement: <Loading></Loading>,
    path: "/company-details/:id",
    element: (
      <PrivateRouter>
        <CompanyDetailsPage></CompanyDetailsPage>,
      </PrivateRouter>
    ),
  },
  {
    path: "/*",
    Component: Error404,
  },
]);

export default router;
