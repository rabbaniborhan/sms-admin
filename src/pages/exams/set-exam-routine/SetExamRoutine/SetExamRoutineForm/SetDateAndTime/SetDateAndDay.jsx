import React from "react";
import { Cross } from "../../../../../../constants/icons";
import SetDateAndDaySelector from "./SetDateAndDaySelector";

const SetDateAndDay = ({ setShowDateModal }) => {
  return (
    <div className='w-[450px] h-[310px] bg-white rounded relative'>
      <button onClick={() => setShowDateModal(false)}>
        <Cross className='absolute top-3 right-3 text-[#7B7B7B]' />
      </button>
      <div>
        <h2 className='text-latest-news-color text-center text-2xl my-3 font-bold'>
          Set Date & Day
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

      {/* Set table form */}
      <form className='px-10'>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex flex-col justify-start items-start gap-[31px]'>
            <label htmlFor=''>Date</label>
            <label htmlFor=''>Day</label>
          </div>

          <div className='flex flex-col justify-center items-center gap-[31px]'>
            <p>:</p>
            <p>:</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5'>
            <SetDateAndDaySelector />
            <input
              type='text'
              className='py-1 px-2 border border-gray-400 rounded outline-none'
            />
          </div>
        </div>
        <div className='text-right mt-5'>
          <button
            type='submit'
            className='py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetDateAndDay;
