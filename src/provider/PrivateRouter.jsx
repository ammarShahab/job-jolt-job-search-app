import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/signIn"></Navigate>;
};

export default PrivateRouter;
