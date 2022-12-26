import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className=" mt-16 px-64 ">
      <div className=" p-10">
        <h1 className="text-3xl">Acount</h1>
        <hr className="mt-6 mb-4" />

        <form
          noValidate=""
          action=""
          className="space-y-12 px-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex mr-6 space-between">
                <p className="text-xl mr-4 text-bold">Profile Picture</p>
                <img
                  className="rounded-full h-28"
                  src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                  alt=""
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  required
                />
              </div>
            </div>

            <div className="flex w-full justify-between">
              <div className="w-1/2 mr-2">
                <label htmlFor="FirstName" className="block mb-2 text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="LastName" className="block mb-2 text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="cellNumber" className="text-sm">
                  Phone Number
                </label>
              </div>
              <input
                type="number"
                name="cellNumber"
                id="cellNumber"
                required
                placeholder="Enter Your Number Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
              </div>
              <textarea
                type="text"
                name="bio"
                id="bio"
                required
                placeholder="Enter Your Bio Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="buttons flex">
              <button className="update">Update</button>
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
