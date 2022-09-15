import React from "react";
import { useRouter } from "next/router";
import { Add, Delete, Edit, Eye } from "../../../../constants/icons";

const StudentInfoTableData = ({ tableData, setEditModal }) => {
  const router = useRouter();

  const handlePushShow = (e) => {
    e.preventDefault();

    router.push("/student/student-information/view-student-info");
  };

  return (
    <tbody>
      {tableData?.map((item, i) => (
        <tr key={i} className={`${i % 2 === 0 ? "bg-[#1EB3A61A]" : ""}`}>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.name}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.roll}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.parentName}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.location}
          </td>
          <td className='py-4 px-2 text-center text-sm font-semibold text-primary-text'>
            {item.contact}
          </td>

          <td className='py-3 px-2 text-center'>
            <span className='space-x-3'>
              <button onClick={() => setEditModal(true)}>
                <Edit className='text-primary h-5 w-[18px] cursor-pointer' />
              </button>
              <button onClick={handlePushShow}>
                <Eye className='text-primary h-5 w-5 cursor-pointer' />
              </button>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default StudentInfoTableData;
