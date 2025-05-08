import React, { use } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../context/AuthContext";
import facebookLogo from "../assets/icons8-facebook-logo-94.png";
import twitterLogo from "../assets/icons8-twitter-48.png";
import linkedInLogo from "../assets/icons8-linkedin-94.png";
import { Link } from "react-router";

const MyProfile = () => {
  const { user, setUser, updateUser, setLoading } = use(AuthContext);
  console.log(user?.displayName);
  console.log(user?.email);
  console.log(user?.photoURL);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    console.log(name, photoURL);

    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        console.log(user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
    e.target.name.value = "";
    e.target.photoURL.value = "";
  };

  return (
    <div>
      <Helmet>
        <title>Job Jolt | My Profile</title>
      </Helmet>
      <h3 className="text-center text-4xl font-bold mt-10">My Profile</h3>
      <div className="py-16 flex justify-center items-start">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center p-6">
                <img
                  src={user.photoURL}
                  alt="Profile Image"
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-500"
                />
              </div>

              <div className="md:w-2/3 p-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  {user.displayName}
                </h2>
                <p className="mt-2 text-gray-600">{user.email}</p>
                <hr className="my-4 border-gray-200" />
                <h3 className="text-xl font-semibold text-gray-800">
                  About Me
                </h3>
                <p className="mt-2 text-gray-600">
                  I'm a passionate software developer with a love for creating
                  innovative solutions. In my free time, I enjoy hiking and
                  photography.
                </p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Location
                  </h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Social Media
                  </h4>
                  <div className="flex space-x-4 mt-2">
                    <Link to="https://web.facebook.com/?_rdc=1&_rdr#">
                      <img className="w-12" src={facebookLogo} alt="facebook" />
                    </Link>
                    <Link to="https://twitter.com/">
                      <img className="w-12" src={twitterLogo} alt="facebook" />
                    </Link>
                    <Link to="https://www.linkedin.com/">
                      <img className="w-12" src={linkedInLogo} alt="facebook" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Update Profile */}
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg mt-10">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Update Profile
            </h2>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  //   onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
