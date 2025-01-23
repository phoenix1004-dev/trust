import { homeHeader } from "../../assets/image";
import { InitialAppearance } from "../../components/Animation";
import { PhoneBgGradient } from "../../components/common/Background";
import { TitleText } from "../../components/common/Text";

const HomeHeader = () => {
  return (
    <section className="w-full lg:w-2/3 mt-[107px] font-bold text-white py-14 text-center flex flex-col items-center justify-center">
      <InitialAppearance time={2}>
        <div className="relative mb-7 mx-[40px] lg:mx-0">
          <TitleText>
            <span className="white-text-shadow">next</span>
            <span className="text-lime-400">level </span>
            <span className="text-neutral-200">
              advanced self custody technology
            </span>
          </TitleText>
        </div>
        <div className="flex justify-center relative">
          <img
            src={homeHeader}
            alt="Next Level Technology"
            className="main-mobiles responsive-image"
          />
          <PhoneBgGradient />
        </div>
      </InitialAppearance>
    </section>
  );
};

export default HomeHeader;
