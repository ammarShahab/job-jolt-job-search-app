import React from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="mt-4">
      <Helmet>
        <title>Job Jolt | Home</title>
      </Helmet>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
