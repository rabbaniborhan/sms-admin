import { createContext } from "react";
import { useState } from "react";
import { Layout } from "../components";
import "../styles/globals.css";

export const ShowContext = createContext();

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <ShowContext.Provider value={[show, setShow]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShowContext.Provider>
  );
}

export default MyApp;
