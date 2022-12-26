import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const BookATable = () => {
    const { user } = useContext(AuthContext);
  return (
    <div
      className="hero mt-16 px-64 h-[700px]"
      style={{
        backgroundImage: `url("https://i.ibb.co/BZHsc9H/hari-nandakumar-fi9k-J8-8-BEk-unsplash.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="lg:flex justify-center items-center  w-[680px], h-[700px] p-24 bg-white text-center text-neutral-content">
        <div className="w-[300px], h-[560px] bg-blue-400 p-12">
          <h1 className="text-3xl mt-6 font-thin text-white">
            Check Availability
          </h1>
          <h2 className="mt-6 font-bold text-3xl mb-6">Opening Times</h2>
          <div className="flex justify-between ">
            <p>Week days</p>
            <p>09:00 - 24:00</p>
          </div>
          <hr />
          <div className="flex justify-between pt-2">
            <p>Saturday</p>
            <p>09:00 - 3:00</p>
          </div>
          <hr />
          <div className="flex justify-between pt-2">
            <p>Sunday</p>
            <p>Day off</p>
          </div>
          <hr />

          <p className="font-thin text-xl text-white font-mono mt-10">
            Call Us Now
          </p>
          <p className="mt-2 text-3xl font-bold">0210213434523</p>
          <div className="flex justify-center my-4">
            <img
              src="https://i.ibb.co/tL6Y8g1/vianney-cahen-MJYYi-C228m-Y-unsplash.jpg"
              alt=""
              className="w-[130px] h-[130px]"
            />
          </div>
        </div>
        <div className="w-[500px], h-[560px] ml-5  bg-white  text-black menu-nav w-full px-3">
          <div className="flex mb-4 justify-between ">
            <h1 className="font-bold text-xl">Make A Reservation</h1>
            <p className="text-blue-400">Tables Arrangement</p>
          </div>
          <p className="text-left py-4">
            You can book a table online easily in just a minute. <br />{" "}
            Reservations are for lunch and dinner, check the <br /> availability
            of your table & book it now!
          </p>

          <div className="w-full flex  md:w-1/3  mb-6 md:mb-0">
            {/* select people part  */}
            <div className="relative mr-6">
              <select
                className="block appearance-none w-52 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>1 people</option>
                <option>2 people</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5 people</option>
                <option>6 people</option>
                <option>7 people</option>
                <option>9 people</option>
                <option>10 people</option>
                <option>11 people</option>
                <option>15 people</option>
                <option>Larger party</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {/* on date  */}
            <div className="relative">
              <input
                type="text"
                className="block w-52 appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                defaultValue="December 31, 2022"
              />
            </div>
          </div>
          <div className="flex mt-5 ">
            <div className="relative mr-6 ">
              <select
                className="block appearance-none w-52 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>6:00 AM</option>
                <option>7:00 AM</option>
                <option>8:00 AM</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                className="block w-52  appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="flex mt-5">
            <div className="relative">
              <input
                type="text"
                value={user?.email}
                className="block w-52 appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-6"
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <input
                type="number"
                className="block w-52 appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Number"
              />
            </div>
          </div>
          <div className="mt-5">
            <textarea
              id="message"
              rows="4"
              className=" block w-full appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Add a special request(optional)"
            ></textarea>
          </div>
          <button className="block w-full appearance-none  bg-white border border-blue-400 text-blue-400 font-semibold  py-3 px-4 pr-8 rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400 mt-5">
            BOOK A TABLE
          </button>
        </div>
      </div>

    </div>
  );
};

export default BookATable;