import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isNav, setIsNav] = useState(false);
  return (
    <>
      <div className="w-full h-14 p-5 flex items-center justify-between">
        <div className="logo font-['Charley'] text-3xl cursor-pointer">AK</div>
        <ul className="md:flex sm:flex hidden gap-6 items-center">
          <li className="text-black text-lg">
            <NavLink>Home</NavLink>
          </li>
          <li className="text-black text-lg">
            <NavLink>About</NavLink>
          </li>
          <li className="text-black text-lg">
            <NavLink>Portfolios</NavLink>
          </li>
        </ul>
        <NavLink className="text-black hidden sm:flex md:flex gap-2 items-center">
          Contact <FiArrowUpRight size={25} />
        </NavLink>
        <RiMenu4Fill
          onClick={() => setIsNav(true)}
          size={25}
          cursor="pointer"
          className="flex sm:hidden md:hidden"
        />
      </div>

      <div
        className={`smNav w-[90%] transition-all duration-300 ${
          isNav ? "translate-x-[0%]" : "translate-x-[100%]"
        } shadow-lg bg-[#dadada] px-8 py-16 sm:hidden md:hidden block right-0 rounded-l-xl h-full absolute top-0`}
      >
        <IoClose
          onClick={() => setIsNav(false)}
          className="absolute top-3 right-3"
          size={25}
          cursor="pointer"
        />

        <ul className="md:hidden sm:hidden flex flex-col gap-6 justify-center">
          <li className="text-black text-lg">
            <NavLink>Home</NavLink>
          </li>
          <li className="text-black text-lg">
            <NavLink>About</NavLink>
          </li>
          <li className="text-black text-lg">
            <NavLink>Portfolios</NavLink>
          </li>
        </ul>
        <NavLink className="text-black md:hidden sm:hidden mt-6 flex gap-2 items-center">
          Contact <FiArrowUpRight size={25} />
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
