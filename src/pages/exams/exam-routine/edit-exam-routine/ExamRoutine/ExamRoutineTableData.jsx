import React from "react";
import { Pencil } from "../../../../../constants/icons";
import moment from "moment";

const ExamRoutineTableData = ({
  data,
  setShowDateModal,
  setShowTimeModal,
  setShowSubjectModal,
}) => {
  const startDate = moment(data.startDateTime)
    .utc()
    .format("Do MMM, dddd, YYYY");
  const startTime = moment(data.startDateTime).utc().format("hh:mm A");
  const endTime = moment(data.endDateTime).utc().format("hh:mm A");

  return (
    <tbody>
      <tr className='text-center'>
        <td className='py-4 px-4  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>{startDate}</p>
          <span>{data?.day}</span>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm h-full w-full absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[3.5%]'
              onClick={() => setShowDateModal(true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>

        <td className='py-3 px-3  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>
            {startTime} - {endTime}
          </p>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm h-full w-full absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[5%]'
              onClick={() => setShowTimeModal(true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>

        <td className='py-4 px-4  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>{data?.subject}</p>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm h-full w-full absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[9%]'
              onClick={() => setShowSubjectModal(true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ExamRoutineTableData;
