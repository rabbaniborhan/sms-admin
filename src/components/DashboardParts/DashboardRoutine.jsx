import React from "react";
import DashboardRoutineTableData from "./DashboardRoutineTableData";
import { dashboardRoutineData } from "../../constants/tableData/dashboardRoutineData";

const DashboardRoutine = () => {
  return (
    <div className='w-2/5 bg-white border border-gray-300 rounded-md'>
      <div className='flex justify-between items-center py-5 px-4'>
        <h3 className='font-semibold'>Class Routine</h3>
        <select className='border border-gray-400 rounded p-0.5'>
          <option value=''>Class-1</option>
          <option value=''>Class-2</option>
          <option value=''>Class-3</option>
          <option value=''>Class-4</option>
          <option value=''>Class-5</option>
        </select>
      </div>
      <table className='rounded-md'>
        <thead>
          <tr>
            <th className='text-xs border-[0.5px] border-gray-400'></th>
            {dashboardRoutineData?.map((item, i) => (
              <th
                className='border-[0.5px] border-gray-400 text-[8px] px-1 text-gray-700'
                key={i}>
                {item.time}
              </th>
            ))}
          </tr>
        </thead>

        {dashboardRoutineData?.map((item, i) => (
          <DashboardRoutineTableData
            day={item.day}
            subject={item.subject}
            key={i}
          />
        ))}
      </table>
    </div>
  );
};

export default DashboardRoutine;
