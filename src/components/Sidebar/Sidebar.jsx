import React from "react";
import Link from "next/link";
import { ArrowRight, Grid, List, Peoples } from "../../constants/icons";
import Image from "next/image";
import images from "../../assets";
import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className='pt-6 h-screen w-52 bg-sidebar text-center fixed left-0 top-0 z-20'>
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
            className={`flex justify-center items-center gap-2 py-3 -ml-10 ${
              router.asPath === "/" ? "bg-[#1EB3A6]" : ""
            }`}>
            <Grid className='w-[18px] h-[18px]' />
            <Link href='/'>Dashboard</Link>
          </span>
        </li>
        {/* Admission Link-Item */}
        <li className='w-full relative group'>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-10 cursor-pointer ${
              router.asPath.includes("/admission") ? "bg-[#1EB3A6]" : ""
            }`}>
            <Peoples className='w-[18px] h-[18px] -mt-[2.5px]' />
            <p>Admission</p>
          </span>

          {/* Admission Submenu */}
          <ul
            className={`text-xs w-full text-left font-[500] hidden group-hover:block`}>
            {/* Add new admission submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/admission/new-admission"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
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
                }`}>
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
                }`}>
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
                }`}>
                <Link href='/admission/application-form'>Exam seat plan</Link>
              </span>
            </li>
          </ul>
        </li>
        {/* Class-Routine Link Item */}
        <li className='w-full'>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-4 ${
              router.asPath.includes("/class-routine") ? "bg-[#1EB3A6]" : ""
            }`}>
            <List className='w-[18px] h-[18px]' />
            <Link href='/class-routine'>Class Routine</Link>
          </span>
        </li>
        {/* Exam-Routine Link Item */}
        <li className='w-full group cursor-pointer'>
          <span
            className={`flex justify-center items-center gap-4 ${
              router.asPath.includes("/exams") ? "bg-[#1EB3A6]" : ""
            }`}>
            <span
              className={`flex justify-center items-center gap-2 py-3 ml-6`}>
              <Image src={images.examIcon} />
              <p>Exam Routine</p>
            </span>
            <ArrowRight className='w-5 h-5 mt-[3px]' />
          </span>

          {/* Exam-Routine Submenu */}
          <ul
            className={`text-xs w-full flex-none text-left font-[500] hidden group-hover:block`}>
            {/* Exam-Routine submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/exams/exam-routine"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/exams/exam-routine'>Exam Routine</Link>
              </span>
            </li>

            {/* Admit-card submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/exams/admit-card" ? "text-[#42DCCF]" : ""
                }`}>
                <Link href='/exams/admit-card'>Admit card</Link>
              </span>
            </li>

            {/* Mark distribution submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/exams/mark-distribution"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/exams/mark-distribution'>Mark distribution</Link>
              </span>
            </li>
          </ul>
        </li>
        {/* Results Link Item */}
        <li className='w-full group cursor-pointer'>
          <span
            className={`flex justify-center items-center gap-4 ${
              router.asPath.includes("/results") ? "bg-[#1EB3A6]" : ""
            }`}>
            <span
              className={`flex justify-center items-center gap-2 py-3 -ml-8`}>
              <Image src={images.resultIcon} />
              <p>Results</p>
            </span>
            <ArrowRight className='w-5 h-5 mt-[3px]' />
          </span>

          {/* Results Submenu */}
          <ul
            className={`text-xs w-full flex-none text-left font-[500] hidden group-hover:block`}>
            {/* Generate Result submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/results/generate-result"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/results/generate-result'>Generate Result</Link>
              </span>
            </li>

            {/* Marksheet submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/results/marksheet" ? "text-[#42DCCF]" : ""
                }`}>
                <Link href='/results/create-marksheet'>Marksheet</Link>
              </span>
            </li>

            {/* Promotion submenu link */}
            <li className='border-b border-[#9E9E9E80] py-2 px-4 hover:text-[#42DCCF]'>
              {/* Dynimically changing the active link text color as per the path of the page via next router */}
              <span
                className={`ml-9 ${
                  router.asPath === "/results/student-promotion"
                    ? "text-[#42DCCF]"
                    : ""
                }`}>
                <Link href='/results/student-promotion'>Promotion</Link>
              </span>
            </li>
          </ul>
        </li>
        {/* //Payment item link */}
        <li className='w-full'>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-[50px] ${
              router.asPath.includes("/payment") ? "bg-[#1EB3A6]" : ""
            }`}>
            <Image src={images.paymentSvg} />
            <Link href='/payment'>Payment</Link>
          </span>
        </li>

        {/* Notice item link */}
        <li className='w-full'>
          <span
            className={`flex justify-center items-center gap-2 py-3 -ml-[68px] ${
              router.asPath.includes("/notice") ? "bg-[#1EB3A6]" : ""
            }`}>
            <Image src={images.noticeSvg} />
            <Link href='/notice'>Notice</Link>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
