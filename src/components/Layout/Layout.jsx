import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>SMS-ADMIN</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative'>
        <Navbar />
        <div className='flex justify-center items-center'>
          <Sidebar />
          <div className='w-4/5 ml-52 overflow-hidden mt-20'>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
