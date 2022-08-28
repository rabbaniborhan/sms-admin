import React from "react";
import { useRouter } from "next/router";
import { Add, Delete, Eye } from "../../../constants/icons";

const ClassRoutineTableData = ({ tableData }) => {
  const router = useRouter();

  const handlePush = (e) => {
    e.preventDefault();

    router.push("/class-routine/set-class-routine");
  };

  return (
    <tbody>
      {tableData.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.class}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.section}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.session}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'></td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'></td>
          <td className='py-3 px-2 text-center'>
            <span className='space-x-2'>
              <button onClick={handlePush}>
                <Add className='text-primary h-5 w-[18px] cursor-pointer' />
              </button>
              <button>
                <Eye className='text-primary h-5 w-5 cursor-pointer' />
              </button>
              <button>
                <Delete className='text-[#FF0000B2] h-5 w-5 cursor-pointer' />
              </button>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClassRoutineTableData;
