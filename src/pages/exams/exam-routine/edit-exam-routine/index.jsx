import React, { useState } from "react";
import { Backdrop } from "../../../../components";
import SetDateAndDay from "../set-exam-routine/SetExamRoutine/SetExamRoutineForm/SetDateAndTime/SetDateAndDay";
import SetTime from "../set-exam-routine/SetExamRoutine/SetExamRoutineForm/SetTime/SetTime";
import SetSubject from "../set-exam-routine/SetExamRoutine/SetExamRoutineForm/SetSubject/SetSubject";
import ExamRoutine from "./ExamRoutine/ExamRoutine";

const SetExamRoutinePage = () => {
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  return (
    <div>
      <div className='mt-16 mb-24'>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Class Routine
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

      {showDateModal && (
        <Backdrop setShowModal={setShowDateModal}>
          <SetDateAndDay setShowDateModal={setShowDateModal} />
        </Backdrop>
      )}

      {showTimeModal && (
        <Backdrop setShowModal={setShowTimeModal}>
          <SetTime setShowTimeModal={setShowTimeModal} />
        </Backdrop>
      )}

      {showSubjectModal && (
        <Backdrop setShowModal={setShowSubjectModal}>
          <SetSubject setShowSubjectModal={setShowSubjectModal} />
        </Backdrop>
      )}

      <ExamRoutine
        setShowDateModal={setShowDateModal}
        setShowTimeModal={setShowTimeModal}
        setShowSubjectModal={setShowSubjectModal}
      />
    </div>
  );
};

export default SetExamRoutinePage;
