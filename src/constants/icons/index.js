import {
  BsPeopleFill,
  BsListUl,
  BsFillBellFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import {
  MdEdit,
  MdOutlineAddCircleOutline,
  MdDelete,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaTimes, FaRegTimesCircle } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

export const Grid = ({ className }) => {
  return <HiOutlineViewGrid className={className} />;
};

export const Peoples = ({ className }) => {
  return <BsPeopleFill className={className} />;
};

export const List = ({ className }) => {
  return <BsListUl className={className} />;
};

export const Eye = ({ className }) => {
  return <AiOutlineEye className={className} />;
};

export const Search = ({ className }) => {
  return <FiSearch className={className} />;
};

export const Bell = ({ className }) => {
  return <BsFillBellFill className={className} />;
};

export const Pencil = ({ className }) => {
  return <MdEdit className={className} />;
};

export const Cross = ({ className }) => {
  return <FaTimes className={className} />;
};

export const Add = ({ className }) => {
  return <MdOutlineAddCircleOutline className={className} />;
};

export const Delete = ({ className }) => {
  return <MdDelete className={className} />;
};

export const ArrowRight = ({ className }) => {
  return <MdKeyboardArrowRight className={className} />;
};

export const ThreeDots = ({ className }) => {
  return <BsThreeDotsVertical className={className} />;
};

export const Edit = ({ className }) => {
  return <BiEdit className={className} />;
};

export const RoundCross = ({ className }) => {
  return <FaRegTimesCircle className={className} />;
};
