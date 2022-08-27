import React, { useState } from "react";
import { Pencil } from "../../../constants/icons";
import ApplicationForm from "./ApplicationForm";
import ApplicationFormEdit from "./ApplicationFormEdit";

const ApplicationFormPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='w-full mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Add New Admission
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[400px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[300px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>
      <div className='w-4/5 mx-auto flex justify-end items-end my-8'>
        <button
          className='py-2 px-6 bg-primary rounded text-white flex justify-center items-center font-semibold gap-1 mr-7'
          onClick={() => setShowModal(true)}>
          Edit <Pencil />
        </button>
      </div>
      <ApplicationForm />
      {showModal && <ApplicationFormEdit setShowModal={setShowModal} />}
    </div>
  );
};

export default ApplicationFormPage;
