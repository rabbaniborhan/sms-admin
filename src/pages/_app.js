import { Provider } from "react-redux";
import { Layout } from "../components";
import "../styles/globals.css";
import store from "../redux/store";
import { useRouter } from "next/router";
import { NextShield } from "next-shield";
import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();
  const path = router.asPath.includes("/login") ? "/" : router.asPath;
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("jwtToken") || null
      : "";

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <NextShield
        isAuth={token}
        isLoading={false}
        router={router}
        privateRoutes={[path]}
        publicRoutes={["/login"]}
        accessRoute='/'
        loginRoute='/login'
        LoadingComponent={<Loading />}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </NextShield>
    );
  }
}

export default MyApp;
