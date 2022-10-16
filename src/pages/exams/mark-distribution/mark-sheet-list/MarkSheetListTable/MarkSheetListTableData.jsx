import React from "react";
import { ThreeDots, Pencil } from "../../../../../constants/icons";

const MarkSheetListTableData = ({ reportData }) => {
  return (
    <tr className='text-center'>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.roll}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.name}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.subject}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4 group relative'>
        <div className='bg-[#0D15300D]/10 backdrop-blur-sm py-3.5 px-[52px] absolute top-0 left-0 hidden group-hover:block'>
          <button
            className='flex justify-center items-center text-primary font-bold text-lg'
            onClick={() => setShowSubjectModal(true)}>
            Edit <Pencil />
          </button>
        </div>
        {reportData?.mcq}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4 group relative'>
        <div className='bg-[#0D15300D]/10 backdrop-blur-sm py-3.5 px-[52px] absolute top-0 left-0 hidden group-hover:block'>
          <button
            className='flex justify-center items-center text-primary font-bold text-lg'
            onClick={() => setShowSubjectModal(true)}>
            Edit <Pencil />
          </button>
        </div>
        {reportData?.cq}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'></td>
      <td colSpan={3} className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.total}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        {reportData?.grade}
      </td>
      <td className='border-[0.5px] border-gray-500 py-4'>
        <button className='px-2'>
          <ThreeDots />
        </button>
      </td>
    </tr>
  );
};

export default MarkSheetListTableData;
