import React from "react";
import { Edit, Delete } from "../../../../constants/icons";

const RunningNotice = ({ setShowModal }) => {
  return (
    <div className='w-full flex justify-center items-center z-30'>
      <div className='w-[10%] bg-yellow py-[17px] text-center font-semibold text-white ring-1 ring-white'>
        <p className='font-sans'>Latest News</p>
      </div>
      <div className='w-11/12 py-4 text-center bg-[#1EB3A6]/50 flex justify-between items-center font-bangla'>
        <marquee>
          <div className='flex gap-5 items-center text-black'>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
            <p className='flex items-center gap-2'>
              ক্লাস স্থগিত সম্পর্কিত বিজ্ঞপ্তি ১৬-০৫-২০২২।
            </p>
          </div>
        </marquee>
        <div className='w-[8%] space-x-2'>
          <button onClick={() => setShowModal(true)}>
            <Edit className='text-primary h-5 w-5' />
          </button>
          <button>
            <Delete className='text-[#FF0000B2] h-5 w-5' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RunningNotice;
