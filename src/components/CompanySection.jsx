import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { motion } from "motion/react";
import { AuthContext } from "../context/AuthContext";

/* const companiesPromise = fetch("/jobs.json")
  .then((res) => res.json())
  .catch((err) => console.error("Fetch error:", err)); */
// console.log(companiesPromise);

const AnimatedLink = motion.create(Link);

const CompanySection = () => {
  const { setLoading } = use(AuthContext);
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    fetch("jobs.json")
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
        setLoading(false);
        // console.log(data);
      });
  }, [setLoading]);

  // const companies = use(companiesPromise);
  // console.log(companies);

  return (
    <div>
      <h3 className="text-center font-extrabold text-5xl mt-24">
        Trusted by more than 100+ Companies
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
        {companies?.map((company) => (
          // Applying react motion animation

          <AnimatedLink
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            to={`/company-details/${company?.id}`}
            key={company.id}
            className="flex items-center justify-center p-4 rounded-xl bg-gray-50 shadow-2xl"
          >
            <img
              src={company?.logo}
              alt={company?.name}
              className="h-16 object-contain"
            />
          </AnimatedLink>
        ))}
      </div>
    </div>
  );
};

export default CompanySection;
