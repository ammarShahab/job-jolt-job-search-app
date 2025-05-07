import React from "react";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (
    <div>
      <Helmet>
        <title>Job Jolt | FAQ</title>
      </Helmet>
      <div className="mt-10 mb-10">
        <h3 className="font-bold text-4xl text-center">
          Frequently Asked Questions
        </h3>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-10">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            1. What is JobJolt Website?
          </div>
          <div className="collapse-content text-sm">
            JobJolt is a modern job-seeking platform designed to connect job
            seekers with top employers across various industries. We simplify
            the job hunt with smart search tools, personalized recommendations,
            and career resources.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            2. Why was JobJolt created?
          </div>
          <div className="collapse-content text-sm">
            JobJolt was created to solve common frustrations in the job hunt. We
            wanted to build a platform that’s easy to use, delivers accurate
            matches, and supports both candidates and employers every step of
            the way.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            3. Who is JobJolt for?
          </div>
          <div className="collapse-content text-sm">
            JobJolt is for everyone—students, fresh graduates, experienced
            professionals, and career changers. We also serve companies looking
            for talented individuals to join their teams.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            4. What makes JobJolt different from other job portals?
          </div>
          <div className="collapse-content text-sm">
            JobJolt uses smart matching technology, intuitive design, and
            helpful resources to stand out from traditional job boards. We focus
            on both career growth and job placement with features built for
            today’s job market.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            5. Is JobJolt free to use?
          </div>
          <div className="collapse-content text-sm">
            Yes! Creating an account, searching jobs, and applying are all free
            for job seekers. We also offer optional premium services for added
            visibility and support, but basic features remain accessible to
            everyone.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            6. How can employers benefit from JobJolt?
          </div>
          <div className="collapse-content text-sm">
            Employers can post job listings, browse our candidate database, and
            use smart filters to find ideal hires quickly. JobJolt also offers
            employer branding tools and tailored recruitment solutions.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            7. What types of jobs are listed on JobJolt?
          </div>
          <div className="collapse-content text-sm">
            JobJolt features jobs in IT, healthcare, finance, education,
            engineering, marketing, customer service, and many more. Our
            listings are updated daily to provide fresh opportunities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
