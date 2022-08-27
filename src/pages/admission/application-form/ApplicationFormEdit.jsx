import React from "react";
import { AdmissionForm } from "../../../components";
import Backdrop from "../../../components/AdmissionForm/Backdrop";

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
