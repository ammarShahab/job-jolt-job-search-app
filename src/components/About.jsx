import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const About = () => {
  /* const [title, setTitle] = useState(null);
  useEffect(() => {
    setTitle("Job Jolt | About");
  }, []); */

  return (
    <div>
      <Helmet>
        {/* {<title>{title}</title>} */}
        <title>Job Jolt | About</title>
      </Helmet>
      <section className="bg-gray-200 rounded-2xl mt-10 mb-10 text-gray-800 px-6 py-12 md:px-12 lg:px-24 shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            About JobJolt
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-center mb-8">
            <strong>JobJolt</strong> is a next-generation job search platform
            built to energize your career path. Whether you're just starting out
            or aiming for your next big role, we connect you to the right
            opportunities—smarter, faster, and easier.
          </p>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-base md:text-lg leading-relaxed">
              Our mission is to simplify the job hunt and empower professionals
              by making the hiring process transparent, efficient, and
              personalized. We believe that finding the right job should feel
              less like a chore and more like a journey forward.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">Who We Serve</h3>
            <p className="text-base md:text-lg leading-relaxed">
              JobJolt is built for job seekers of all levels—from students and
              recent graduates to seasoned experts exploring new paths. We also
              support employers looking to attract quality talent with
              easy-to-use hiring tools.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">Why Choose JobJolt?</h3>
            <ul className="list-disc pl-6 text-base md:text-lg space-y-2">
              <li>Smart job-matching technology tailored to your profile</li>
              <li>Responsive design — apply anytime, from any device</li>
              <li>Fresh job listings updated daily across all industries</li>
              <li>Helpful career tools including resume tips, alerts & more</li>
              <li>Trusted by thousands of users and growing every day</li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Get Started with JobJolt
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              It’s free and only takes a minute to join.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
