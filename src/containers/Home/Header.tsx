import { appStore, googleAppStore, homeHeader, info } from "../../assets/image";
import { GradientBg, InitialAppearance } from "../../components/Animation";
import { PhoneBgGradient } from "../../components/common/Background";
import { NormalText, TitleText } from "../../components/common/Text";
import UserGroup from "../../components/UserGroup";

const HomeHeader = () => {
  return (
    <section className="relative w-full lg:w-2/3 mt-[40px] md:mt-[157px] font-bold text-white py-14 text-center flex flex-col items-center justify-center">
      <GradientBg />
      <InitialAppearance className="h-full justify-items-center z-10" time={2}>
        <UserGroup />
        <div className="relative mb-7 mt-10 mx-[40px] lg:mx-0">
          <TitleText className="leading-[40px] md:leading-[70px]">
            <span className="white-text-shadow text-[36px] sm:text-[56px] md:text-[70px] xl:text-[80px] 2xl:text-[100px]">
              OWN YOUR PRIVACY
            </span>
            <br />
            <span className="text-neutral-200 text-[20px] sm:text-[28px] md:text-[40px] font-normal">
              the ultimate self-custody crypto wallet
            </span>
          </TitleText>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex items-center gap-1">
            <img className="w-[20px] h-[20px]" src={info} alt="informaion" />
            <NormalText>App Available For</NormalText>
          </div>
          <div className="flex gap-[10px] bg-[#0e0e10] border border-solid border-[#1d1d20] rounded-full px-3 py-2">
            <img
              className="w-[28px] h-[28px]"
              src={googleAppStore}
              alt="google app store"
            />
            <div className="border-r border-solid border-[#1d1d20]" />
            <img className="w-[28px] h-[28px]" src={appStore} alt="app store" />
          </div>
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
