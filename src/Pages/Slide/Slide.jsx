import React from "react";

const Slide = () => {
  return (
    <div className="flex p-16 h-[500px] items-center ">
      <div className="w-2/3 ml-12 -mr-8 justify-center flex items-center ">
        <div className=" w-1/2 p-3 mr-[-100px] z-10 h-[260px] text-center bg-slate-100">
          <p className="my-3">Hello Dear</p>
          <h1 className="mb-1 text-2xl font-bold">Wellcome to Quench_Valley</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            possimus, iure totam veniam nulla, autem nihil molestiae est minima
            molestias beatae, modi tenetur atque nemo quis quas. Fugiat, ad
            esse!
          </p>
          <div className="explor-lastNav mt-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/eimonalamin/"
                className=""
              >
                EXPLORE
              </a>
            </div>
        </div>
        <div className=" w-1/2 flex items-center h-[700px]">

        <img
        className="h-[300px]"
          src="https://i.ibb.co/Ltcs32b/zhifei-zhou-Bib-M3dmlw9-I-unsplash.jpg"
          alt=""
        />
        </div>
      </div>
      <div className="w-1/3 flex items-center -mr-16 h-[260px]">
        <img className=" h-[260px]"
          src="https://i.ibb.co/dpGY6Tm/eaters-collective-ESmxug33-C0c-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide;
