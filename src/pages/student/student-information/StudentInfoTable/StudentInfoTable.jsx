import React from "react";
import { studentInfoTableData } from "../../../../constants/tableData/studentInfoTableData";
import StudentInfoTableData from "./StudentInfoTableData";

const StudentInfoTable = ({ setShowModal, setEditModal }) => {
  return (
    <div className="w-full mx-auto mt-16">
      <div className="flex justify-end items-end my-6 ">
        <button
          className="py-2 px-6 bg-primary rounded text-white"
          onClick={() => setShowModal(true)}
        >
          Add New Student
        </button>
      </div>
      <table className="w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="py-4 px-2 text-white text-center">Name</th>
            <th className="py-4 px-2 text-white text-center">Roll</th>
            <th className="py-4 px-2 text-white text-center">Parent Name</th>
            <th className="py-4 px-2 text-white text-center">Location</th>
            <th className="py-4 px-2 text-white text-center">Contact</th>
            <th className="py-4 px-2 text-white text-center" />
          </tr>
        </thead>

        <StudentInfoTableData
          tableData={studentInfoTableData}
          setEditModal={setEditModal}
        />
      </table>
      <p className="font-semibold text-sm mt-6">10 Result</p>
    </div>
  );
};

export default StudentInfoTable;
