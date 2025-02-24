import Layout from "../components/Layout";
import AboutHeader from "../containers/About/Header";
import KeyFeatures from "../containers/About/Key";
import Mission from "../containers/About/Mission";
import Reason from "../containers/About/Reason";

const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-[123px] lg:pt-[107px] relative w-full overflow-x-hidden">
        <AboutHeader />
        <Mission />
        <KeyFeatures />
        <Reason />
      </div>
    </Layout>
  );
};

export default AboutPage;
