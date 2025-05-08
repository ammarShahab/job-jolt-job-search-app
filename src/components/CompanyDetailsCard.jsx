import React, { use, useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { Link, useLoaderData } from "react-router";
import "react-responsive-modal/styles.css";
import { AuthContext } from "../context/AuthContext";

const CompanyDetailsCard = ({ id }) => {
  const data = useLoaderData();
  console.log(data);

  const [companyDetails, setCompanyDetails] = useState({});

  const { setLoading } = use(AuthContext);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [selectedJobs, setSelectedJobs] = useState(null);
  const onHandleModal = (job) => {
    onOpenModal();
    console.log(job);
    setSelectedJobs(job);
    // console.log(selectedJobs);
  };

  useEffect(() => {
    const matchedCompany = data.find((company) => company.id == id);
    console.log(matchedCompany);
    setCompanyDetails(matchedCompany);
    // setLoading(false);
  }, [data, id]);

  const jobId = companyDetails?.jobs?.map((job) => job.id);
  console.log(jobId);

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
              className="w-20 md:w-30 h-20 object-contain"
            />
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-900">
                {companyDetails.name}
              </h1>
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
                  <div>
                    <button
                      onClick={() => onHandleModal(job)}
                      className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </button>
                    <Modal open={open} onClose={onCloseModal} center>
                      {selectedJobs && (
                        <div className="py-10 px-4 rounded-2xl max-w-lg">
                          <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            {selectedJobs.title}
                          </h2>
                          <p className="text-gray-700 mb-2">
                            <strong>Type:</strong> {selectedJobs.jobType}
                          </p>
                          <p className="text-gray-700 mb-2">
                            <strong>Salary:</strong> {selectedJobs.salary}
                          </p>
                          <p className="text-gray-700 mb-2">
                            <strong>Location:</strong> {selectedJobs.location}
                          </p>
                          <p className="text-gray-700 mb-2">
                            <strong>Description:</strong>{" "}
                            {selectedJobs.description}
                          </p>
                          <p className="text-gray-700 mb-2">
                            <strong>Requirements:</strong>{" "}
                            {selectedJobs.requirements.map((require) => (
                              <li>{require}</li>
                            ))}
                          </p>

                          <Link
                            to={companyDetails.website}
                            target="_blank"
                            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                          >
                            Apply
                          </Link>
                        </div>
                      )}
                    </Modal>
                  </div>
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
