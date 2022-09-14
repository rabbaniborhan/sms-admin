import React from "react";
import { useRouter } from "next/router";
import { Add, Delete, Eye } from "../../../../constants/icons";

const ExamRoutineTableData = ({ tableData }) => {
  const router = useRouter();

  const handlePushAdd = (e) => {
    e.preventDefault();

    router.push("/exams/set-exam-routine");
  };

  const handlePushShow = (e) => {
    e.preventDefault();

    router.push("/exams/edit-exam-routine");
  };

  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.exam}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.examYear}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.class}
          </td>

          <td className='py-3 px-2 text-center'>
            <span className='space-x-2'>
              <button onClick={handlePushAdd}>
                <Add className='text-primary h-5 w-[18px] cursor-pointer' />
              </button>
              <button onClick={handlePushShow}>
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

export default ExamRoutineTableData;