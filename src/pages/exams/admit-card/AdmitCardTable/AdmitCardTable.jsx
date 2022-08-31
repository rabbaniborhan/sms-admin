import React from "react";
import { admitCardTableData } from "../../../../constants/tableData/tableData";
import AdmitCardTableData from "./AdmitCardTableData";

const AdmitCardTable = ({ setShowModal }) => {
  return (
    <div className='w-full mx-auto mt-16'>
      <div className='flex justify-between items-center mb-6'>
        <p className='font-semibold text-sm'>10 Result</p>
        <button
          className='py-2 px-8 rounded text-white bg-yellow'
          onClick={() => setShowModal(true)}>
          Print
        </button>
      </div>
      <table className='w-full ring-[0.3px] ring-[#5E5E5E] bg-white'>
        <thead>
          <tr className='bg-primary'>
            <th className='py-4 px-2 text-white text-center'>Class</th>
            <th className='py-4 px-2 text-white text-center'>Exam Name</th>

            <th className='py-4 px-2 text-white text-center'>Session</th>

            <th className='py-4 px-2 text-white text-center'>Action</th>
          </tr>
        </thead>

        <AdmitCardTableData tableData={admitCardTableData} />
      </table>
    </div>
  );
};

export default AdmitCardTable;
