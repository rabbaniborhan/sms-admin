import { useRouter } from "next/router";
import { useContext } from "react";
import {
  Banner,
  InfoSection,
  Table,
  StatisticsSection,
  PrincipalSection,
  LatestNews,
} from "../../../../components";
import { ShowContext } from "../../../_app";

const Home = () => {
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
          btn: true,
        }}
        navPath={true}
        subPath={true}
      />

      <LatestNews />
      <Table />
      <InfoSection />
      <StatisticsSection />

      <button className='py-3 px-12 text-white font-semibold rounded fixed right-5 bottom-5 bg-yellow'>
        Save
      </button>
    </div>
  );
};

export default Home;
