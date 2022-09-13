import React from "react";
import noticeData from "../../../../constants/tableData/noticeData";
import NoticeBoardTableData from "./NoticeBoardTableData";

const NoticeBoardTable = ({ setShowModal }) => {
  return (
    <table className='w-full border border-gray-300'>
      <thead>
        <tr className='bg-primary'>
          <th className='py-4 px-2 text-white text-center'>File</th>
          <th className='py-4 pl-[180px] text-white text-left'>Title</th>
          <th className='py-4 pr-12 text-white text-center'>Date</th>
          <th className='py-4 px-2 text-white text-center'>Action</th>
        </tr>
      </thead>

      <NoticeBoardTableData
        setShowModal={setShowModal}
        tableData={noticeData}
      />
    </table>
  );
};

export default NoticeBoardTable;
