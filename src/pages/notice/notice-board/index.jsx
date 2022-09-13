import React from "react";
import { useState } from "react";
import { Backdrop } from "../../../components";
import CreateNoticeForm from "./CreateNoticeForm/CreateNoticeForm";
import NoticeBoardTable from "./NoticeBoardTable/NoticeBoardTable";

const NoticeBoardPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className='w-11/12 mx-auto mt-10 pb-32'>
      <div>
        <h2 className='text-latest-news-color text-center text-3xl my-3 font-bold'>
          Notice Board
        </h2>
        <div className='mb-10'>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[250px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] heading-polygon'></span>
            <span className='w-[150px] py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] heading-polygon'></span>
          </div>
        </div>
      </div>

      <div className='text-right my-6'>
        <button
          className='py-2 px-6 bg-primary rounded text-white'
          onClick={() => setShowCreateModal(true)}>
          Add New
        </button>
      </div>
      <NoticeBoardTable />

      {showCreateModal && (
        <Backdrop setShowModal={setShowCreateModal}>
          <CreateNoticeForm setShowModal={setShowCreateModal} />
        </Backdrop>
      )}
    </div>
  );
};

export default NoticeBoardPage;
