import Head from "next/head";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>SMS-ADMIN</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex justify-center items-center'>
        <Sidebar />
        <div className='flex-1 '>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
