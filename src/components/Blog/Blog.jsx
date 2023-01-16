import React from "react";
import { RxAvatar } from "react-icons/rx";
import { BiTimeFive } from "react-icons/bi";
const Blog = () => {
  return (
    <div className="py-6 blogg h-[680px] px-16 ">
      <h1 className="text-3xl text-center uppercase mb-3">Our Latest Blog</h1>
      <div className="hrrr mx-auto mb-4 bg-blue-500"></div>
      <p className="text-center mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur adipis elit sed do eiusmod <br />{" "}
        telmpor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-3 gap-5">
        <div className=" relative">
          <div>
            <img
              src="https://i.ibb.co/sbGx02W/wallpaperflare-com-wallpaper.jpg"
              alt=""
            />
          </div>
          <div className="hover:border-b-4 border-b-4 hover:border-blue-400 border-gray-500 border-solid bg-blue-300 h-[260px] text-center p-2 w-11/12 left-4 absolute top-[180px]">
            <div className="mb-3">
              <p className="text-2xl mt-10 mb-4 font-bold">
                But I must Explain
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                beatae ratione. Dolorem?
              </p>
            </div>
            <div className="flex bottom-0 mt-[80px] justify-between px-6">
              <div className="flex">
                <span>
                  <RxAvatar></RxAvatar>
                </span>
                <p className="-mt-1 ml-2">Admin Name</p>
              </div>
              <div className="flex">
                <span>
                  <BiTimeFive></BiTimeFive>
                </span>
                <p className="-mt-1 ml-2">16th April 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative">
          <div>
            <img
              src="https://i.ibb.co/mXJRH9m/Cute-anime-girl-wallpaper-download.png"
              alt=""
            />
          </div>
          <div className="hover:border-b-4  border-b-4 hover:border-blue-400 border-gray-500 border-solid bg-blue-300 h-[260px] text-center p-2 w-11/12 left-4 absolute top-[180px]">
            <div className="mb-3">
              <p className="text-2xl mt-10 mb-4 font-bold">
                But I must Explain
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                beatae ratione. Dolorem?
              </p>
            </div>
            <div className="flex bottom-0 mt-[80px] justify-between px-6">
              <div className="flex">
                <span>
                  <RxAvatar></RxAvatar>
                </span>
                <p className="-mt-1 ml-2">Admin Name</p>
              </div>
              <div className="flex">
                <span>
                  <BiTimeFive></BiTimeFive>
                </span>
                <p className="-mt-1 ml-2">16th April 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative">
          <div>
            <img
              src="https://i.ibb.co/sbGx02W/wallpaperflare-com-wallpaper.jpg"
              alt=""
            />
          </div>
          <div className="hover:border-b-4 border-b-4 hover:border-blue-400 border-gray-500 border-solid bg-blue-300 h-[260px] text-center p-2 w-11/12 left-4 absolute top-[180px]">
            <div className="mb-3">
              <p className="text-2xl mt-10 mb-4 font-bold">
                But I must Explain
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                beatae ratione. Dolorem?
              </p>
            </div>
            <div className="flex bottom-0 mt-[80px] justify-between px-6">
              <div className="flex">
                <span>
                  <RxAvatar></RxAvatar>
                </span>
                <p className="-mt-1 ml-2">Admin Name</p>
              </div>
              <div className="flex">
                <span>
                  <BiTimeFive></BiTimeFive>
                </span>
                <p className="-mt-1 ml-2">16th April 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
