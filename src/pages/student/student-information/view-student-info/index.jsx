import React from "react";
import StudentInfoSlip from "./StudentInfoSlip/StudentInfoSlip";

const ViewStudentInfoPage = () => {
  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Student Info
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
      <StudentInfoSlip />
    </div>
  );
};

export default ViewStudentInfoPage;
