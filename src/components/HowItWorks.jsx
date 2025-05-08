import React from "react";
import signUp from "../assets/Sign Up.png";
import createProfile from "../assets/Create Profile.png";
import applyJobs from "../assets/Apply for jobs.png";

const HowItWorks = () => {
  return (
    <div className="mt-18 mb-8">
      <h1 className="text-center text-5xl font-bold">How it Works</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="shadow-2xl rounded-2xl p-8 space-y-4">
          <img
            className="w-3xs h-[150px] mx-auto"
            src={signUp}
            alt="signUpImage"
          />
          <h3 className="text-center font-bold text-xl">Register</h3>
          <p className="text-center">
            Register in minutes and create a standout profile. Add your skills,
            work history, education, and certifications to attract top employers
          </p>
        </div>
        <div className="shadow-2xl rounded-2xl p-8 space-y-4">
          <img
            className="w-3xs h-[150px] object-cover mx-auto"
            src={createProfile}
            alt="profile"
          />
          <h3 className="text-center font-bold text-xl">Create Profile</h3>
          <p className="text-center">
            Submit applications effortlessly with our one-click apply feature.
            Track your applications and communicate directly with recruiters.
          </p>
        </div>
        <div className="shadow-2xl rounded-2xl p-8 space-y-4">
          <img
            className="w-3xs h-[150px] object-cover mx-auto"
            src={applyJobs}
            alt=""
          />
          <h3 className="text-center font-bold text-xl">Land Your dream job</h3>
          <p className="text-center">
            Prepare for interviews with our resources, connect with hiring
            managers, and secure the job that’s right for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
