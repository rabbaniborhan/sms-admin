import { useRouter } from "next/router";
import React from "react";
import { Delete, Eye } from "../../../constants/icons";
import noticeData from "../../../constants/tableData/noticeData";

const NoticeTable = () => {
  const router = useRouter();

  const handlePush = (e) => {
    e.preventDefault();

    router.push("/notice/notice-board");
  };

  return (
    <div className='w-full'>
      <div className='mb-8 mt-20 text-right'>
        <button
          className='py-3 w-44 mr-28 rounded bg-primary text-white font-semibold'
          onClick={handlePush}>
          Create Notice
        </button>
      </div>
      <table className='border-collapse bg-white lg:w-4/5 xl:w-3/5 mx-auto'>
        {/* Mapping through the data.js file to generate table data */}

        {noticeData.map((item, i) => (
          <tbody key={i}>
            <tr>
              <td className='px-6 py-4 border-[0.5px] border-gray-400 text-left font-bangla'>
                {item.title}
              </td>
              <td className='px-6 py-4 border-[0.5px] border-gray-400 text-primary-color text-center font-bangla font-semibold'>
                {item.date}
              </td>
              <td className='px-4 py-4 border-[0.5px] border-gray-400 text-center space-x-5'>
                <button>
                  <Eye className='text-xl text-primary' />
                </button>
                <button>
                  <Delete className='text-xl text-[#FF0000B2]' />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default NoticeTable;
