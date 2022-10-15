import Image from "next/image";
import React from "react";
import images from "../../assets";
import { Bell, Search } from "../../constants/icons";

const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-around items-center bg-[#1EB3A6] overflow-hidden py-3 fixed z-10">
      <div className="flex justify-center items-center gap-3">
        <Image
          src={images.principal}
          alt="admin_image"
          height={40}
          width={40}
        />
        <div className="text-white">
          <p className="text-xs">Welcome,</p>
          <h3 className="font-semibold text-sm">Sabrina Sultana</h3>
          <p className="text-xs">The Principal</p>
        </div>
      </div>

      <form className="flex justify-center items-center gap-10 -mr-52">
        <div className="relative">
          <Search className="absolute w-5 h-5 top-[9.5px] left-2" />
          <input
            type="text"
            className="py-2.5 pl-8 w-80 rounded-md text-primary-text text-sm outline-none"
            placeholder="Search"
          />
        </div>
        <Bell className="w-5 h-5 text-white" />
      </form>
    </div>
  );
};

export default Navbar;
