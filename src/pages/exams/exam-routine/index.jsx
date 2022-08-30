import React, { useState } from "react";
import { Add } from "../../../constants/icons";
import ExamRoutineSearchForm from "./ExamRoutineSearchForm/ExamRoutineSearchForm";
import CreateExamRoutineForm from "./CreateExamRotineForm/CreateExamRoutineForm";
import { Backdrop } from "../../../components";
import ExamRoutineTable from "./ExamRoutineTable/ExamRoutineTable";

const ExamsPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Exam Routine
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[300px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[200px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center gap-5 mb-16'>
        <button
          className='py-3 px-5 rounded bg-primary text-white text-sm font-semibold flex justify-center items-center gap-2'
          onClick={() => setShowModal(true)}>
          <Add className='w-5 h-5' />
          Create Exam Routine
        </button>
      </div>

      <ExamRoutineSearchForm />
      <ExamRoutineTable />

      {showModal && (
        <Backdrop setShowModal={setShowModal}>
          <CreateExamRoutineForm setShowModal={setShowModal} />
        </Backdrop>
      )}
    </div>
  );
};

export default ExamsPage;
