import React from "react";

const SuccessStories = () => {
  return (
    <div>
      <section className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8 mt-9 rounded-2xl mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 mb-10">
            Hear how Job Jolt helped users land their dream jobs.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <img
                className="w-24 h-24 rounded-full mb-4 object-cover"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User photo"
                alt=""
              />

              <h3 className="text-lg font-semibold text-gray-800">
                Sarah Williams
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Frontend Developer at TechNova
              </p>
              <p className="text-gray-600">
                “Thanks to Job Jolt, I found my ideal remote job in just 2
                weeks! The job alerts were super helpful.”
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User video"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/*  <button className="bg-black bg-opacity-50 text-white rounded-full p-2">
                    ▶
                  </button> */}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                James Patel
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Data Analyst at FinWise
              </p>
              <p className="text-gray-600">
                “After months of searching, Job Jolt's smart filters helped me
                land a role I love.”
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <img
                className="w-24 h-24 rounded-full mb-4 object-cover"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="User photo"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                Emily Zhang
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Product Manager at Creatify
              </p>
              <p className="text-gray-600">
                “The resume tools and job matching made the whole process
                smooth. Highly recommend!”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
