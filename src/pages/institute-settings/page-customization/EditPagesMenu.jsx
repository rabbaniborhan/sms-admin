import React from "react";
import Link from "next/link";
import { Edit } from "../../../constants/icons";

const EditPagesMenu = () => {
  return (
    <ul className='leading-10 w-[15%]'>
      <li className='hover:text-primary transition-all'>
        <a
          href='/institute-settings/page-customization/edit-page/home'
          target='_blank'>
          <span className='flex justify-start items-center gap-10 cursor-pointer group'>
            <p>1. Home</p>
            <Edit className='invisible group-hover:visible' />
          </span>
        </a>
      </li>
      <li className='hover:text-primary transition-all'>
        <a
          href='/institute-settings/page-customization/edit-page/about-us'
          target='_blank'>
          <span className='flex justify-start items-center gap-10 cursor-pointer group'>
            <p>2. About Us</p>
            <Edit className='invisible group-hover:visible' />
          </span>
        </a>
      </li>
      <li className='hover:text-primary transition-all'>
        <a
          href='/institute-settings/page-customization/edit-page/contact'
          target='_blank'>
          <span className='flex justify-start items-center gap-10 cursor-pointer group'>
            <p>3. Contact</p>
            <Edit className='invisible group-hover:visible' />
          </span>
        </a>
      </li>
      <li className='hover:text-primary transition-all'>
        <a href='/' target='_blank'>
          <span className='flex justify-start items-center gap-10 cursor-pointer group'>
            <p>1. Footer</p>
            <Edit className='invisible group-hover:visible' />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default EditPagesMenu;
