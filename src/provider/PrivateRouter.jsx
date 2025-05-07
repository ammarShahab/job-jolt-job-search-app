import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import Loading from "../components/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading, setLoading } = use(AuthContext);
  console.log(user);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PrivateRouter;
