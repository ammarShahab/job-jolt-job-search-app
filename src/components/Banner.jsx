import React from "react";
import bannerImage from "../assets/bannerImage.jpg";

const Banner = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-stretch border">
      <div className="md:w-1/2 bg-[#236e85] flex flex-col p-8 md:py-24 md:px-4">
        <h1 className="text-4xl font-bold text-[#99ffff]">
          Unlock Your Future with JobJolt's Ultimate Job Search Experience
        </h1>
        <p className="text-lg text-white mt-4">
          Discover your dream job with JobJolt. Explore thousands of job
          listings, connect with top employers, and take the next step in your
          career journey today!
        </p>
      </div>

      <div className="md:w-1/2 h-full md:h-full border">
        <img
          src={bannerImage}
          alt="JobJolt Banner"
          className="h-full object-fill"
        />
      </div>
    </div>
  );
};

export default Banner;
