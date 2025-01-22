import FeatureCard from "../../components/Cards/Home/Feature";
import { HeaderText } from "../../components/common/Text";
import { FEATURE_ITEMS } from "../../constants/Items";
import { FEATURE_DATA } from "../../types";

const HomeFeatures = () => {
  return (
    <section className="w-full px-4 text-gray-800 mb-16">
      <div className="text-center mb-8 py-4">
        <HeaderText className="white-text-shadow">Key Features</HeaderText>
      </div>
      <section className="w-full mb-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {FEATURE_ITEMS.map((item: FEATURE_DATA, index: number) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomeFeatures;
