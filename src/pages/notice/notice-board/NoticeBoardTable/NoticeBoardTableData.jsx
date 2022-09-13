import React from "react";
import { Delete, Edit } from "../../../../constants/icons";

const NoticeBoardTableData = ({ tableData }) => {
  const newTableData = tableData?.slice(0, 2);

  return (
    <tbody>
      {newTableData.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            PDF
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item?.title}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item?.date}
          </td>

          <td className='py-3 px-2 text-center cursor-pointer space-x-2'>
            <button>
              <Edit className='text-primary h-5 w-5' />
            </button>
            <button>
              <Delete className='text-[#FF0000B2] h-5 w-5' />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default NoticeBoardTableData;
