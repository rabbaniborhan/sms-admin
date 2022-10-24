import { Provider } from "react-redux";
import { Layout } from "../components";
import "../styles/globals.css";
import store from "../redux/store";
import { useRouter } from "next/router";
import { NextShield } from "next-shield";
import Loading from "../components/Loading/Loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
