import { useRouter } from "next/router";
import React, { useContext } from "react";
import {
  Banner,
  Footer,
  InfoSection,
  PrincipalSection,
  StatisticsSection,
} from "../../../../components";
import { ShowContext } from "../../../_app";

const AboutUs = () => {
  const [show, setShow] = useContext(ShowContext);
  const router = useRouter();
  if (router.asPath.includes("/edit-page")) {
    setShow(false);
  }

  return (
    <div>
      <Banner
        /* Sending different values for showing alternative text and hiding the button from the banner */
        path={{
          btn: false,
          imageAlter: false,
          heightAlter: true,
          paddingAlter: true,
        }}
        navPath={true}
        subPath={true}
      />
      <InfoSection />
      <StatisticsSection />
      <PrincipalSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
