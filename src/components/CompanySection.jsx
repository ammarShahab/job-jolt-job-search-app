import React, { use } from "react";
import { Link, NavLink } from "react-router";

const companiesPromise = fetch("/public/jobs.json").then((res) => res.json());
console.log(companiesPromise);

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
          <Link
            // to={`/company/${company.id}`}
            key={company.id}
            className="flex items-center justify-center p-4 rounded-xl bg-gray-50 hover:shadow-2xl transition"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompanySection;
