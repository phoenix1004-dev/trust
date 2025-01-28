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
  return (
    <Layout>
      <HomeHeader />
      <HomeFeatures />
      <HomeSafeSend />
      <HomeWorks />
      <HomeSlider />
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
