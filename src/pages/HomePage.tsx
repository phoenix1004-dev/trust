import { useEffect } from "react";
import Layout from "../components/Layout";
import HomeBenifits from "../containers/Home/Benefit";
import HomeDownload from "../containers/Home/Download";
import HomeFAQs from "../containers/Home/FAQs";
import HomeFeatures from "../containers/Home/Features";
import HomeFuture from "../containers/Home/Future";
import HomeHeader from "../containers/Home/Header";
import HomeSafeSend from "../containers/Home/SafeSend";
import HomeSlider from "../containers/Home/Slider";
import HomeSupport from "../containers/Home/Support";
import HomeWallet from "../containers/Home/Wallet";
import HomeWorks from "../containers/Home/Works";

const HomePage = () => {
  useEffect(() => {
    const targetId = localStorage.getItem("scrollTo");
    if (targetId) {
      localStorage.removeItem("scrollTo");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <HomeHeader />
      <HomeSlider />
      <HomeFeatures />
      <HomeSafeSend />
      <HomeWorks />
      <HomeSupport />
      <HomeBenifits />
      <HomeFuture />
      <HomeWallet />
      <HomeDownload />
      <HomeFAQs />
    </Layout>
  );
};

export default HomePage;
