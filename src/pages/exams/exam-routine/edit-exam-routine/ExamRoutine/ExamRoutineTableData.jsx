import React from "react";
import { Pencil } from "../../../../../constants/icons";

const ExamRoutineTableData = ({
  data,
  setShowDateModal,
  setShowTimeModal,
  setShowSubjectModal,
}) => {
  return (
    <tbody>
      <tr className='text-center'>
        <td className='py-4 px-4  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>{data?.date}</p>
          <span>{data?.day}</span>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm py-[26px] px-[78px] absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg'
              onClick={() => setShowDateModal(true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>

        <td className='py-3 px-3  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>{data?.time}</p>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm py-[26px] px-[134px] absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg'
              onClick={() => setShowTimeModal(true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>

        <td className='py-4 px-4  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>{data?.subject}</p>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm py-[26px] px-[118.5px] absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg'
              onClick={() => setShowSubjectModal(true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ExamRoutineTableData;
