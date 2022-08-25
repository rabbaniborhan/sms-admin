import React from "react";
import Link from "next/link";
import { Grid, Peoples } from "../../constants/icons";
import Image from "next/image";
import images from "../../assets";
import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  // States for submenu
  const [showSubAdmission, setShowSubAdmission] = useState(false);

  return (
    <div className='pt-6 h-full w-52 bg-sidebar text-center fixed left-0 top-0'>
      {/* SMS Admin panel logo */}
      <a className='mb-8 -ml-4 block cursor-pointer'>
        <Link href='/'>
          <Image src={images.logo} alt='sms_logo' width={100} height={40} />
        </Link>
      </a>
      <ul className='text-md text-white text-left w-full font-[500]'>
        {/* Dashboard Link-Item */}
        <li className='w-full'>
          <span
            className={`flex justify-center items-center gap-1 py-3 -ml-10 ${
              router.asPath === "/" ? "bg-[#1EB3A6]" : ""
            }`}>
            <Grid className='w-[18px] h-[18px]' />
            <Link href='/'>Dashboard</Link>
          </span>
        </li>

        {/* Admission Link-Item */}
        <li className='w-full relative'>
          <span
            className={`flex justify-center items-center gap-1 py-3 -ml-10 ${
              router.asPath === "/admission" ? "bg-[#1EB3A6]" : ""
            }`}
            onClick={() => setShowSubAdmission(!showSubAdmission)}>
            <Peoples className='w-[18px] h-[18px] -mt-[2.5px]' />
            <Link href='/admission'>Admission</Link>
          </span>

          {/* Admission Submenu */}
          <ul
            className={`text-xs w-full text-left font-[500] absolute -top-10 mt-2 ${
              showSubAdmission ? "visible top-10" : "hidden"
            }`}>
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              <button className='ml-9'>Add new admission </button>
            </li>
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              <button className='ml-9'>Admission payment</button>
            </li>
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              <button className='ml-9'>Print admit card</button>
            </li>
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              <button className='ml-9'>Exam seat plan</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
