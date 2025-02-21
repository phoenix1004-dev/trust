import Layout from "../components/Layout";
import Introduce from "../containers/SafeSend/Introduce";

const SafeSendPage = () => {
  return (
    <Layout>
      <div className="w-full px-4 pt-[123px] lg:pt-[107px] relative">
        <Introduce />
      </div>
    </Layout>
  );
};

export default SafeSendPage;
