import Layout from "../components/Layout";
import Additional from "../containers/Features/Additional";
import ComingSoon from "../containers/Features/ComingSoon";
import GetStarted from "../containers/Features/GetStarted";
import FeatureHeader from "../containers/Features/Header";
import Powerful from "../containers/Features/Powerful";

const FeaturePage = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-[123px] lg:pt-[107px] relative w-full overflow-x-hidden">
        <FeatureHeader />
        <Powerful />
        <ComingSoon />
        <Additional />
        <GetStarted />
      </div>
    </Layout>
  );
};

export default FeaturePage;
