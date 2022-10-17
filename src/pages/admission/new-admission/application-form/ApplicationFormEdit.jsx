import React from "react";
import { AdmissionForm, Backdrop } from "../../../../components";

const ApplicationFormEdit = ({ setShowModal }) => {
  return (
    <div className='w-full mx-auto'>
      <Backdrop setShowModal={setShowModal}>
        <AdmissionForm setShowModal={setShowModal} />
      </Backdrop>
    </div>
  );
};

export default ApplicationFormEdit;
