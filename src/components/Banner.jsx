import React from "react";
import bannerImage from "../assets/bannerImage.jpg";

const Banner = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-stretch ">
      <div className="md:w-1/2 bg-[#236e85] flex flex-col p-6 lg:p-12 xl:p-20">
        <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#99ffff]">
          Unlock Your Future with JobJolt's Ultimate Job Search Experience
        </h1>
        <p className="text-lg text-white mt-4">
          Discover your dream job with JobJolt. Explore thousands of job
          listings, connect with top employers, and take the next step in your
          career journey today!
        </p>
      </div>

      <div className="md:w-1/2">
        <img
          src={bannerImage}
          alt="JobJolt Banner"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
