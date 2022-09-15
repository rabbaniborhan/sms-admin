import React from "react";
import Image from "next/image";
import images from "../../../../assets";

const StudentInfoTotalSection = () => {
  return (
    <div className='w-full mx-auto flex justify-between items-center'>
      {/* Total student card */}
      <div className='w-80 relative overflow-hidden px-3 py-8 bg-#fff shadow-md rounded-md ring-1 ring-[#1EB3A6]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <div className='text-center w-full space-y-2'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>10670</h4>
          <p className='text-xl font-semibold'>Total Student</p>
        </div>
      </div>

      {/* Girls card */}
      <div className='w-80 relative overflow-hidden px-3 py-8 bg-#fff shadow-md rounded-md ring-1 ring-[#1EB3A6]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <div className='text-center w-full space-y-2'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>6670</h4>
          <p className='text-xl font-semibold'>Total Student</p>
        </div>
      </div>

      {/* Girls card */}
      <div className='w-80 relative overflow-hidden px-3 py-8 bg-#fff shadow-md rounded-md ring-1 ring-[#1EB3A6]'>
        <span className='absolute -right-2 -top-3'>
          <Image src={images.yellowCircle} alt='yellow_circle' />
        </span>
        <div className='text-center w-full space-y-2'>
          <h4 className='text-3xl font-semibold text-[#1EB3A6]'>4000</h4>
          <p className='text-xl font-semibold'>Boys</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoTotalSection;
