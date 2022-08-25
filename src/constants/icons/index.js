import { BsPeopleFill, BsListUl, BsFillBellFill } from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

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
