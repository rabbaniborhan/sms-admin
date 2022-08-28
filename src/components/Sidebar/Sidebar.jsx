import React from "react";
import Link from "next/link";
import { Grid, List, Peoples } from "../../constants/icons";
import Image from "next/image";
import images from "../../assets";
import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  // States for submenu
  const [showSubAdmission, setShowSubAdmission] = useState(false);

  return (
    <div className='pt-6 h-full w-52 bg-sidebar text-center fixed left-0 top-0 z-20'>
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
            className={`flex justify-center items-center gap-1 py-3 -ml-10 cursor-pointer ${
              router.asPath.includes("/admission") ? "bg-[#1EB3A6]" : ""
            }`}
            onClick={() => setShowSubAdmission(!showSubAdmission)}>
            <Peoples className='w-[18px] h-[18px] -mt-[2.5px]' />
            <p>Admission</p>
          </span>

          {/* Admission Submenu */}
          <ul
            className={`text-xs w-full text-left font-[500] ${
              showSubAdmission ? "visible" : "hidden"
            }`}>
            {/* Add new admission submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/admission/new-admission"
                    ? "text-[#42DCCF]"
                    : ""
                }`}
                onClick={() => setShowSubAdmission(false)}>
                <Link href='/admission/new-admission'>Add new admission</Link>
              </span>
            </li>

            {/* Admission payment submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/admission/admission-payment"
                    ? "text-[#42DCCF]"
                    : ""
                }`}
                onClick={() => setShowSubAdmission(false)}>
                <Link href='/admission/admission-payment'>
                  Admission payment
                </Link>
              </span>
            </li>

            {/* Print admit card submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/admission/admit-card"
                    ? "text-[#42DCCF]"
                    : ""
                }`}
                onClick={() => setShowSubAdmission(false)}>
                <Link href='/admission/admit-card'>Print admit card</Link>
              </span>
            </li>

            {/* Exam-Seat-Plan submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/admission/exam-seat-plan"
                    ? "text-[#42DCCF]"
                    : ""
                }`}
                onClick={() => setShowSubAdmission(false)}>
                <Link href='/admission/application-form'>Exam seat plan</Link>
              </span>
            </li>
          </ul>
        </li>

        {/* Class-Routine Link Item */}
        <li className='w-full'>
          <span
            className={`flex justify-center items-center gap-1 py-3 -ml-4 ${
              router.asPath === "/class-routine" ? "bg-[#1EB3A6]" : ""
            }`}>
            <List className='w-[18px] h-[18px]' />
            <Link href='/class-routine'>Class Routine</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
