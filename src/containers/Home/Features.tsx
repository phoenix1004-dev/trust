import { feature } from "../../assets/image";
import FeatureCard from "../../components/Cards/Home/Feature";
import { HeaderText } from "../../components/common/Text";
import { FEATURE_ITEMS } from "../../constants/Items";
import { FEATURE_DATA } from "../../types";

const HomeFeatures = () => {
  return (
    <section
      className="w-full px-4 text-gray-800 mb-16 justify-items-center pt-10"
      style={{
        background:
          "radial-gradient(27.274516120515756% 35.90163801120711% at 50% -2.7755575615628914e-14%,#131315 0%,rgba(0,0,0,1) 100%)",
      }}
    >
      <div
        className="w-full h-[1px] absolute top-0 left-0 right-0 overflow-visable z-1"
        style={{
          background:
            "radial-gradient(40% 50% at 50% 50%,#28282c 0%,rgb(0,0,0) 100%)",
        }}
      />
      <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
        <img className="w-[20px] h-[20px]" src={feature} alt="star" />
        <p className="text-[16px] text-white">Features</p>
      </div>
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
