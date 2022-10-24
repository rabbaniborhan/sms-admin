import Cookies from "js-cookie";
import { NextShield } from "next-shield";
import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, router }) => {
  const show = useSelector((state) => state.ui.showLayout);
  const token = Cookies.get("jwtToken");
  return (
    <div>
      <Head>
        <title>SMS-ADMIN</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NextShield
        isAuth={token}
        isLoading={false}
        router={router}
        privateRoutes={["/", "/admission"]}
        publicRoutes={["/login"]}
        accessRoute='/'
        loginRoute='/login'
        LoadingComponent={<p>Loading...</p>}>
        {show ? (
          <main className='relative'>
            <Navbar />
            <div className='flex justify-center items-center'>
              <Sidebar />
              <div className='w-4/5 ml-52 overflow-hidden mt-20'>
                {children}
              </div>
            </div>
          </main>
        ) : (
          children
        )}
      </NextShield>
    </div>
  );
};

export default Layout;
