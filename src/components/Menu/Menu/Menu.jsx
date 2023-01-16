import React from "react";
import { CiTimer, CiLocationOn } from "react-icons/ci";
import { MdFastfood, MdEmojiFoodBeverage, MdFoodBank } from "react-icons/md";
import { GiOpenedFoodCan } from "react-icons/gi";
import "./Menu.css";

const Menu = () => {
  // const {
  //   data: services = [],
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/services");
  //     const data = res.json();
  //     return data;
  //   },
  // });
  // if (isLoading) {
  //   return <Spinner></Spinner>;
  // }
  return (
    <div className="">
      <h1 className="text-3xl text-center mb-10 text-bold text-blue-400">
        Discover Our Menu
      </h1>
      <div className="lg:flex sm:block h-[630px] px-16 overflow-hidden">
        <div className="w-1/2 menu"></div>
        <div className="w-1/2 flex flex-col gap-2 bg-blue-600 px-3 py-3">
          <div className="flex h-[145px]">
            <div className="w-[200px]">
              <img
                className="h-[145px]"
                src="https://i.ibb.co/0D5t6Y0/madeline-tallman-m5oypz13kkc-unsplash.jpg"
                alt=""
              />
            </div>
            <div className=" bg-blue-400 px-6 text-white py-2 w-full">
              <p className="text-xl ">Breackfast</p>
              <p>
                Ratings : <span className="text-yellow-400">5 Star</span>
              </p>
              <div className="flex items-center">
                <CiLocationOn></CiLocationOn>
                <p className="ml-3"> Location : </p>
                <span className="text-sm ml-1">Mirpur-10</span>
              </div>
              <div className="flex items-center">
                <MdEmojiFoodBeverage></MdEmojiFoodBeverage>
                <p className="ml-3"> Breackfast </p>
              </div>
              <div className="flex items-center">
                <CiTimer></CiTimer>
                <p className="ml-3"> Today : </p>
                <span className="text-sm ml-1">10PM-12PM</span>
              </div>
            </div>
          </div>
          <div className="flex h-[145px]">
            <div className="w-[200px]">
              <img
                className="h-[145px]"
                src="https://i.ibb.co/dpGY6Tm/eaters-collective-ESmxug33-C0c-unsplash.jpg"
                alt=""
              />
            </div>
            <div className=" bg-blue-400 px-6 text-white py-2 w-full">
              <p className="text-xl ">Dinner</p>
              <p>
                Ratings : <span className="text-yellow-400">4.5 Star</span>
              </p>
              <div className="flex items-center">
                <CiLocationOn></CiLocationOn>
                <p className="ml-3"> Location : </p>
                <span className="text-sm ml-1">Dhanmondi-32</span>
              </div>
              <div className="flex items-center">
                <MdFoodBank></MdFoodBank>
                <p className="ml-3"> Dinner </p>
              </div>
              <div className="flex items-center">
                <CiTimer></CiTimer>
                <p className="ml-3"> Today : </p>
                <span className="text-sm ml-1">07PM-09PM</span>
              </div>
            </div>
          </div>
          <div className="flex h-[145px]">
            <div className="w-[200px]">
              <img
                className="h-[145px]"
                src="https://i.ibb.co/NNxYTcg/soo-ji-choi-ju1-D228la2-E-unsplash.jpg"
                alt=""
              />
            </div>
            <div className=" bg-blue-400 px-6 text-white py-2 w-full">
              <p className="text-xl ">Drinks</p>
              <p>
                Ratings : <span className="text-yellow-400">4.5 Star</span>
              </p>
              <div className="flex items-center">
                <CiLocationOn></CiLocationOn>
                <p className="ml-3"> Location : </p>
                <span className="text-sm ml-1">Kolabagan</span>
              </div>
              <div className="flex items-center">
                <MdFastfood></MdFastfood>
                <p className="ml-3"> Drinks </p>
              </div>
              <div className="flex items-center">
                <CiTimer></CiTimer>
                <p className="ml-3"> Today : </p>
                <span className="text-sm ml-1">03PM-05PM</span>
              </div>
            </div>
          </div>
          <div className="flex h-[145px]">
            <div className="w-[200px]">
              <img
                className="h-[145px]"
                src="https://i.ibb.co/KF3TGMq/sina-piryae-b-Bzj-Wth-Tqb8-unsplash.jpg"
                alt=""
              />
            </div>
            <div className=" bg-blue-400 px-6 text-white py-2 w-full">
              <p className="text-xl ">Vegan Food</p>
              <p>
                Ratings : <span className="text-yellow-400">5 Star</span>
              </p>
              <div className="flex items-center">
                <CiLocationOn></CiLocationOn>
                <p className="ml-3"> Location : </p>
                <span className="text-sm ml-1">Jhenaidah</span>
              </div>
              <div className="flex items-center">
                <GiOpenedFoodCan></GiOpenedFoodCan>
                <p className="ml-3"> Vegan </p>
              </div>
              <div className="flex items-center">
                <CiTimer></CiTimer>
                <p className="ml-3"> Today : </p>
                <span className="text-sm ml-1">9AM-10AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
