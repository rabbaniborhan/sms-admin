import React from "react";
import { Cross } from "../../../constants/icons";
import ClassScheduleSelector from "./ClassScheduleSelector";

const ClassScheduleForm = ({ setShowModal }) => {
  return (
    <div className="w-[450px] h-[510px] bg-white rounded relative">
      <button onClick={() => setShowModal(false)}>
        <Cross className="absolute top-3 right-3 text-[#7B7B7B]" />
      </button>
      <div>
        <h2 className="text-latest-news-color text-center text-2xl my-3 font-bold">
          Class Schedule
        </h2>
        <div className="mb-7">
          <div className="flex justify-center items-center">
            <span className="bg-primary p-2 mr-[-2px] heading-polygon" />
            <span className="w-[250px] py-[1px] bg-primary" />
            <span className="bg-primary p-2 ml-[-2px] heading-polygon" />
          </div>
          <div className="flex justify-center items-center">
            <span className="bg-primary p-2 mr-[-2px] heading-polygon" />
            <span className="w-[150px] py-[1px] bg-primary" />
            <span className="bg-primary p-2 ml-[-2px] heading-polygon" />
          </div>
        </div>
      </div>

      {/* Schedule form */}
      <form className="px-10">
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col justify-start items-start gap-[31px]">
            <label htmlFor="">Weekend</label>
            <label htmlFor="">Class Time</label>
            <label htmlFor="">Class Time</label>
            <label htmlFor="">Class Time</label>
            <label htmlFor="">Class Time</label>
          </div>

          <div className="flex flex-col justify-center items-center gap-[31px]">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <ClassScheduleSelector />
            <input
              type="text"
              className="py-1 px-2 border border-[#0D153099] outline-none rounded"
            />
            <input
              type="text"
              className="py-1 px-2 border border-[#0D153099] outline-none rounded"
            />
            <input
              type="text"
              className="py-1 px-2 border border-[#0D153099] outline-none rounded"
            />
            <input
              type="text"
              className="py-1 px-2 border border-[#0D153099] outline-none rounded"
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="text-primary font-semibold text-sm">
            Add Class Time
          </button>
        </div>

        <div className="text-right mt-4">
          <button
            type="submit"
            className="py-2 px-6 rounded-sm bg-primary text-white text-xs font-semibold"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassScheduleForm;
