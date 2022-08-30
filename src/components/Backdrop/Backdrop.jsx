import React from "react";
import { useRouter } from "next/router";

const Backdrop = ({ children, setShowModal }) => {
  const router = useRouter();
  const handleShowModal = (e) => {
    if (e.target.id === "backdrop") {
      setShowModal(false);
    }
  };
  return (
    <div
      className={`bg-backdrop ${
        router.asPath === "/admission/application-form" ? "absolute" : "fixed"
      } top-0 inset-0 z-10 flex justify-center items-center w-[87%] ml-auto`}
      id='backdrop'
      onClick={handleShowModal}>
      {children}
    </div>
  );
};

export default Backdrop;
