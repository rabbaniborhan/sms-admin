import { BsPeopleFill, BsListUl } from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";

export const Grid = ({ className }) => {
  return <HiOutlineViewGrid className={className} />;
};

export const Peoples = ({ className }) => {
  return <BsPeopleFill className={className} />;
};

export const List = ({ className }) => {
  return <BsListUl className={className} />;
};
