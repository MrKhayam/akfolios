import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
      <>
        <div className="md:w-[90%] mx-auto h-auto mt-8 md:mt-12">
          <h1 className="md:text-8xl sm:text-6xl text-4xl font-extralight text-center">
            Get Your Dream Portfolio Website Today
          </h1>
          <div className="md:w-[65%] sm:w-[70%] w-[90%] bg-[#dadada] mt-3 md:mt-8 mx-auto h-[200px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl shadow-sm">
            <img
              className="w-full object-contain h-full"
              src="/labPort.png"
              alt=""
            />
          </div>
          <p className="text-center w-[90%] sm:w-[60%] md:w-1/2 mx-auto mt-3 text-md md:text-lg">
            Showcase your skills with professionally designed portfolios
            tailored for freelancers.
          </p>
          <div className="btns h-auto w-full justify-center mt-6 md:flex-row flex-col flex gap-4 items-center">
            <NavLink className="bg-[#dadada] md:w-auto w-[90%] sm:w-[70%] text-center rounded-md px-10 py-4">
              View Portfolios
            </NavLink>
            <NavLink className="flex md:w-auto w-[90%] sm:w-[70%] justify-center items-center gap-3 border-[#dadada] px-6 py-[13px] border-2 rounded-md transition-all duration-300 hover:bg-[#dadada]">
              Get Started <FiArrowUpRight size={25} />
            </NavLink>
          </div>
        </div>
      </>
    );
};

export default Home;
