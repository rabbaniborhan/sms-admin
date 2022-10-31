import React from "react";
import { Cross } from "../../../../../../../constants/icons";

const SetTime = ({ setShowTimeModal }) => {
  return (
    <div className='w-[450px] h-[310px] bg-white rounded relative'>
      <button onClick={() => setShowTimeModal(false)}>
        <Cross className='absolute top-3 right-3 text-[#7B7B7B]' />
      </button>
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          Select Time
        </h2>
        <div className='mb-7'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
            <span className='w-[250px] py-[1px] bg-primary' />
            <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon' />
            <span className='w-[150px] py-[1px] bg-primary' />
            <span className='bg-primary p-2 ml-[-2px] heading-polygon' />
          </div>
        </div>
      </div>

      <form className='px-5'>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex flex-col justify-start items-start gap-[31px]'>
            <p htmlFor=''>Start Time</p>
            <p htmlFor=''>End Time</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-[31px]'>
            <p>:</p>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <input
              type='time'
              className='py-1 px-2 border border-gray-400 rounded outline-none uppercase w-60'
            />

            <input
              type='time'
              className='py-1 px-2 border border-gray-400 rounded outline-none uppercase w-60'
            />
          </div>
        </div>
        <div className='text-right mt-5'>
          <button
            type='submit'
            className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold inline-block mr-6'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetTime;
