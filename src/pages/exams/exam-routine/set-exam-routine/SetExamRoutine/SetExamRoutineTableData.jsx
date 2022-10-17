import React from "react";
import { Add } from "../../../../../constants/icons";

const SetExamRoutineTableData = ({
  data,
  setShowDateModal,
  setShowTimeModal,
  setShowSubjectModal,
}) => {
  return (
    <tbody>
      <tr className='text-center'>
        <td className='py-4 px-4  border-[0.5px] border-gray-400'>
          <button onClick={() => setShowDateModal(true)}>
            <Add className='text-3xl cursor-pointer' />
          </button>
        </td>

        <td className='py-3 px-3  border-[0.5px] border-gray-400'>
          <button onClick={() => setShowTimeModal(true)}>
            <Add className='text-3xl cursor-pointer' />
          </button>
        </td>

        <td className='py-4 px-4  border-[0.5px] border-gray-400'>
          <button onClick={() => setShowSubjectModal(true)}>
            <Add className='text-3xl cursor-pointer' />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SetExamRoutineTableData;
