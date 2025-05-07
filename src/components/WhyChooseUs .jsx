import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    title: "Total Jobs Posted",
    value: 12450,
    gradient: "from-blue-100 to-blue-200",
  },
  {
    title: "Active Job Seekers",
    value: 78300,
    gradient: "from-green-100 to-green-200",
  },
  {
    title: "Trusted by Employers",
    value: 1200,
    gradient: "from-purple-100 to-purple-200",
  },
  {
    title: "Successful Matches Made",
    value: 9875,
    gradient: "from-pink-100 to-pink-200",
  },
  {
    title: "Users Active Today",
    value: 2500,
    gradient: "from-yellow-100 to-yellow-200",
  },
  {
    title: "Fresh Listings This Week",
    value: 420,
    gradient: "from-indigo-100 to-indigo-200",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-10 text-center mt-10 rounded-2xl">
      <h2 className="text-5xl font-bold mb-6">Why Choose Us</h2>
      <p>Builds trust by showing achievements and growth.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.gradient} rounded-2xl shadow p-6`}
          >
            <h3 className="text-4xl font-semibold text-gray-800">
              {<CountUp end={stat.value} duration={10}></CountUp>}+
            </h3>
            <p className="text-lg mt-2 text-gray-700">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
