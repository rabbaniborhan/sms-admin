import React from "react";

const Backdrop = ({ children, setShowModal }) => {
  const handleShowModal = (e) => {
    if (e.target.id === "backdrop") {
      setShowModal(false);
    }
  };
  return (
    <div
      className='bg-backdrop absolute top-0 inset-0 z-5 flex justify-center items-center w-[86.3%] ml-auto'
      id='backdrop'
      onClick={handleShowModal}>
      {children}
    </div>
  );
};

export default Backdrop;
