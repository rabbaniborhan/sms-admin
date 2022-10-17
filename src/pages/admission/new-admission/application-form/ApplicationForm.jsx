import React from "react";
import images from "../../../../assets";
import Image from "next/image";
import AcknowledgementTable from "./ApplicationFormTable";

const ApplicationForm = () => {
  return (
    <div className='w-3/4 mx-auto '>
      <div className='w-full mx-auto pt-5 pb-1 px-9 text-primary-text bg-white relative ring-[0.5px] ring-[#0D1530CC]'>
        <div className='absolute lg:top-[35%] lg:left-[190px] xl:left-[350px]'>
          <Image src={images.bigLogo} height={550} width={550} />
        </div>
        <div className='text-center space-y-2'>
          <Image src={images.sclLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <p className='text-sm text-primary-text'>68, East Rampura, Dhaka</p>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Acknowledgement Slip
            <span className='bg-gray-400 py-[1px] w-64'></span>
          </h3>
        </div>
        <div className='w-full px-5 mx-auto my-14'>
          <div className='flex justify-end items-end mt-5 mb-8'>
            <Image src={images.studentImg} height={120} width={120} />
          </div>
          <div className='flex justify-between capitalize'>
            <div className='flex justify-between items-center capitalize '>
              <div className='space-y-5 font-semibold text-base'>
                <p>Application ID</p>
                <p>Application For Class</p>
                <p>name</p>
                <p>father's name</p>
                <p>mother's name</p>
                <p>Application For Class</p>
                <p>Phone</p>
                <p>Religeon</p>
                <p>Gender</p>
                <p>Blood Group</p>
                <p>Present Address</p>
                <p>Permanent Address</p>
              </div>
              <div className='mx-14 space-y-5'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='space-y-5 font-bold text-md'>
                <p>136549878</p>
                <p>Six</p>
                <p>Mahmudul Haque</p>
                <p>Anamul Haque</p>
                <p>Hosneara Pervin</p>
                <p>28/10/2000</p>
                <p>01716714733</p>
                <p>Islam</p>
                <p>Male</p>
                <p>A+ (Positive)</p>
                <p>Zero point, Rajshahi</p>
                <p>Zero point, Rajshahi</p>
              </div>
            </div>
            <div className=' flex justify-between capitalize'>
              <div className='font-semibold text-base space-y-5'>
                <p className='-mr-8'>date of apply</p>
              </div>
              <div className='ml-20 mr-12 space-y-5'>
                <p>:</p>
              </div>
              <div className='font-bold space-y-5'>
                <p>11/12/20022</p>
              </div>
            </div>
          </div>
          <AcknowledgementTable />

          <div className='flex justify-end items-end mt-40'>
            <h3 className='text-semibold text-md flex flex-col justify-center items-start gap-1 italic font-semibold'>
              <span className='bg-gray-800 py-[0.5px] w-64'></span>
              Applicant’s Signature
            </h3>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-end items-end gap-3 mx-auto my-16'>
        <button className='bg-yellow text-white py-3 w-36 rounded'>
          Print
        </button>
        <button className='bg-primary text-white py-3 w-36 rounded'>
          Download
        </button>
      </div>
    </div>
  );
};

export default ApplicationForm;
