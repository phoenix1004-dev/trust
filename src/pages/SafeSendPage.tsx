import Layout from "../components/Layout";
import Introduce from "../containers/SafeSend/Introduce";
import Problem from "../containers/SafeSend/Problem";
import Wallet from "../containers/SafeSend/Wallet";

const SafeSendPage = () => {
  return (
    <Layout>
      <div className="w-full px-4 pt-[123px] lg:pt-[107px] relative">
        <Introduce />
        <Wallet />
        <Problem />
      </div>
    </Layout>
  );
};

export default SafeSendPage;
