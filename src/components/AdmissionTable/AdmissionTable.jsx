import { tableData } from "../../constants/tableData/tableData";
import TableData from "./TableData";

const AdmissionTable = () => {
  return (
    <table className='mt-16 w-full ring-[0.3px] ring-[#5E5E5E] bg-white rounded overflow-hidden'>
      <thead>
        <tr className='bg-primary'>
          <th className='py-4 px-2 text-white text-center'>Name</th>
          <th className='py-4 px-2 text-white text-center'>Application ID</th>
          <th className='py-4 px-2 text-white text-center'>Class</th>
          <th className='py-4 px-2 text-white text-center'>Contact </th>
          <th className='py-4 px-2 text-white text-center'>Session</th>
          <th className='py-4 px-2 text-white text-center'>Method</th>
          <th className='py-4 px-2 text-white text-center'>Payment</th>
          <th className='py-4 px-2 text-white text-center'></th>
        </tr>
      </thead>

      <TableData tableData={tableData} />
    </table>
  );
};

export default AdmissionTable;
