import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const CompanyDetailsCard = ({ id }) => {
  const data = useLoaderData();
  console.log(data);

  const [companyDetails, setCompanyDetails] = useState({});

  useEffect(() => {
    const matchedCompany = data.find((company) => company.id == id);
    console.log(matchedCompany);
    setCompanyDetails(matchedCompany);
  }, [data, id]);

  return (
    <div className="min-h-screen bg-gray-100 mt-10 p-8">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div>
          <img src={companyDetails.bannerImage} alt="bannerImage" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <img
              src={companyDetails.logo}
              alt="logo"
              className="w-30 h-20 object-contain"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {companyDetails.name}
              </h1>
              {/* <p className="text-lg text-gray-600">{company.tagline}</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              About {companyDetails.name}
            </h2>
            <p className="text-gray-700 mb-4">{companyDetails.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  <strong>Industry:</strong> {companyDetails.industry}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <strong>Location:</strong> {companyDetails.location}
                </p>
                <p className="text-gray-600">
                  <strong>Website:</strong>{" "}
                  <a
                    href={companyDetails.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {companyDetails.website}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Available Jobs
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {companyDetails?.jobs?.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* <img
                  src={job.banner}
                  alt={`${job.title} Banner`}
                  className="w-full h-24 object-cover"
                /> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    <strong>Type:</strong> {job.jobType}
                  </p>
                  <p className="text-gray-600 mt-1">
                    <strong>Salary:</strong> {job.salary}
                  </p>
                  <Link
                    // to={`/jobs/${job.id}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsCard;
