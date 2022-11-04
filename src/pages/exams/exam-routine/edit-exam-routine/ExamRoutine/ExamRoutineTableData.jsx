import React from "react";
import { Pencil } from "../../../../../constants/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import { idActions } from "../../../../../redux/store/slices/idSlice";

const ExamRoutineTableData = ({
  data,
  setShowDateModal,
  setShowTimeModal,
  setShowSubjectModal,
}) => {
  const startDate = moment(data.examDate).utc().format("DD/MM/YYYY");
  const day = moment(data.startDateTime).utc().format("dddd");
  const startTime = moment(data.startDateTime).utc().format("hh:mm A");
  const endTime = moment(data.endDateTime).utc().format("hh:mm A");
  const dispatch = useDispatch();

  const passData = (id, boolean) => {
    setShowDateModal(boolean);
    dispatch(idActions.setId({ id: id }));
  };

  return (
    <tbody>
      <tr className='text-center'>
        <td className='py-4 px-4  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>{startDate}</p>
          <span className='font-semibold'>{day}</span>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm h-full w-full absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[10%]'
              onClick={() => passData(data._id, true)}>
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
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[7%]'
              onClick={() => setShowTimeModal(true)}>
              Edit <Pencil />
            </button>
          </div>
        </td>

        <td className='py-4 px-4  border-[0.5px] border-gray-400 relative group'>
          <p className='text-base font-semibold'>{data?.subject}</p>

          <div className='bg-[#0D15300D]/10 backdrop-blur-sm h-full w-full absolute top-0 left-0 hidden group-hover:block'>
            <button
              className='flex justify-center items-center text-primary font-bold text-lg mx-auto mt-[15%]'
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
