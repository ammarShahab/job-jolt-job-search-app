import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { motion } from "motion/react";

const companiesPromise = fetch("/public/jobs.json").then((res) => res.json());
console.log(companiesPromise);

const AnimatedLink = motion(Link);

const CompanySection = () => {
  const companies = use(companiesPromise);
  console.log(companies);

  return (
    <div>
      <h3 className="text-center font-extrabold text-5xl mt-20">
        Trusted by more than 100+ Companies
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
        {companies.map((company) => (
          // Applying react motion animation
          <>
            <AnimatedLink
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              to={`/company-details/${company.id}`}
              key={company.id}
              className="flex items-center justify-center p-4 rounded-xl bg-gray-50 shadow-2xl"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 object-contain"
              />
            </AnimatedLink>
          </>
        ))}
      </div>
    </div>
  );
};

export default CompanySection;
