import React from "react";
import ApplicationSearchForm from "./TotalSection/ApplicationSearchForm/ApplicationSearchForm";
import FilterButtons from "./TotalSection/FilterButtons/FilterButtons";
import TotalSection from "./TotalSection/TotalSection";

const AdmissionPage = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div>
        <h2 className='text-latest-news-color text-center text-4xl my-3 font-bold'>
          Admission
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[300px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[200px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>
      <TotalSection />
      <FilterButtons />
      <ApplicationSearchForm />
    </div>
  );
};

export default AdmissionPage;
