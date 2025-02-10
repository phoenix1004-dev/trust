import { feature } from "../../assets/image";
import { InitialAppearance } from "../../components/Animation";
import Card from "../../components/common/Card";
import { HeaderText } from "../../components/common/Text";
import { FEATURE_ITEMS } from "../../constants/Items";
import { FEATURE_DATA } from "../../types";

const HomeFeatures = () => {
  const animations = [
    { from: { top: 0, left: -100 }, to: { top: 0, left: 0 }, time: 1 },
    { from: { top: 100, left: 0 }, to: { top: 0, left: 0 }, time: 1 },
    { from: { top: 0, left: 100 }, to: { top: 0, left: 0 }, time: 1 },
  ];

  return (
    <section className="w-full px-4 text-gray-800 mb-16 justify-items-center pt-10">
      <InitialAppearance className="w-full justify-items-center" time={1}>
        <div className="flex w-full justify-center">
          <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
            <img className="w-[20px] h-[20px]" src={feature} alt="star" />
            <p className="text-[16px] text-white">Features</p>
          </div>
        </div>
        <div className="text-center mb-8 py-4">
          <HeaderText className="white-text-shadow">Key Features</HeaderText>
        </div>
      </InitialAppearance>
      <section className="w-full mb-14 px-4 justify-items-center">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 text-white items-center relative">
          {FEATURE_ITEMS.map((item: FEATURE_DATA, index: number) => (
            <InitialAppearance
              key={index}
              className="relative"
              from={animations[index].from}
              to={animations[index].to}
              time={animations[index].time}
            >
              <Card
                title={item.title}
                desc={item.desc}
                image={item.icon}
                height={500}
              />
            </InitialAppearance>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomeFeatures;
