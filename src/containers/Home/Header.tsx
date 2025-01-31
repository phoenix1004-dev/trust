import { appStore, googleAppStore, info } from "../../assets/image";
import { BgAnimation, InitialAppearance } from "../../components/Animation";
import { NormalText, TitleText } from "../../components/common/Text";
import UserGroup from "../../components/UserGroup";

const HomeHeader = () => {
  return (
    <section
      className="relative w-full lg:w-2/3 mt-[157px] font-bold text-white py-14 text-center flex flex-col items-center justify-center"
      style={{ height: "calc(100vh - 157px)" }}
    >
      <BgAnimation />
      <InitialAppearance className="justify-items-center z-10" time={2}>
        <UserGroup />
        <div className="relative mb-7 mt-10 mx-[40px] lg:mx-0">
          <TitleText className="leading-[70px]">
            <span className="white-text-shadow text-[100px]">
              OWN YOUR PRIVACY
            </span>
            <br />
            <span className="text-neutral-200 text-[40px] font-normal">
              the ultimate self-custody crypto wallet
            </span>
          </TitleText>
        </div>
        {/* <div className="flex justify-center relative">
          <img
            src={homeHeader}
            alt="Next Level Technology"
            className="main-mobiles responsive-image"
          />
          <PhoneBgGradient />
        </div> */}
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
      </InitialAppearance>
    </section>
  );
};

export default HomeHeader;
