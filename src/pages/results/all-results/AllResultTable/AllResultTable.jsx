import React from "react";
import { resultTableData } from "../../../../constants/tableData/resultTableData";
import AllResultTableData from "./AllResultTableData";

const AllResultTable = () => {
  return (
    <div className='my-20'>
      <p className='font-semibold my-5'>20 Result</p>
      <table className='w-full border-[0.5px] border-gray-500 relative bg-white text-center rounded overflow-hidden'>
        <thead>
          <tr className='text-lg'>
            <th className='border-[0.5px] border-gray-500 p-3'>Roll</th>
            <th className='border-[0.5px] border-gray-500 p-3'>Name</th>
            <th className='border-[0.5px] border-gray-500 p-3'>Position</th>
            <th className='border-[0.5px] border-gray-500 p-3'>Grade</th>
            <th className='border-[0.5px] border-gray-500 p-3'>GPA</th>
          </tr>
        </thead>
        <tbody>
          {resultTableData.map((item, i) => (
            <AllResultTableData tableData={item} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllResultTable;
