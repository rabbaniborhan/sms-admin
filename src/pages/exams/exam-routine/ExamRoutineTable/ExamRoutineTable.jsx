import React from "react";
import { examRoutineTableData } from "../../../../constants/tableData/examRoutineTableData";
import ExamRoutineTableData from "./ExamRoutineTableData";

const ExamRoutineTable = () => {
  return (
    <div className="w-full mx-auto mt-16">
      <table className="w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="py-4 px-10 text-white text-center">Exam Name</th>
            <th className="py-4 px-10 text-white text-center">Exam Year</th>

            <th className="py-4 px-10 text-white text-center">Class</th>

            <th className="py-4 px-10 text-white text-center">Action</th>
          </tr>
        </thead>

        <ExamRoutineTableData tableData={examRoutineTableData} />
      </table>
      <div>
        <p className="font-semibold mt-5 text-sm">10 Result</p>
      </div>
    </div>
  );
};

export default ExamRoutineTable;
