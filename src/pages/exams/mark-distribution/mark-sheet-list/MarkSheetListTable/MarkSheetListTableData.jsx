import React from "react";
import { ThreeDots } from "../../../../../constants/icons";

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
      <td className='border-[0.5px] border-gray-500 py-4'>{reportData?.mcq}</td>
      <td className='border-[0.5px] border-gray-500 py-4'>{reportData?.cq}</td>
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
