import { face } from "../../assets/image";
import BenifitCard from "../../components/Cards/Home/Benifit";
import { HeaderText } from "../../components/common/Text";
import { BENIFIT_ITEMS } from "../../constants/Items";
import { BENIFIT_DATA } from "../../types";

const HomeBenifits = () => {
  return (
    <section
      className="w-full mt-8 px-4 bg-full-screen-shadow bg-no-repeat text-center pt-10 justify-items-center"
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
        <img className="w-[20px] h-[20px]" src={face} alt="star" />
        <p className="text-[16px] text-white">Benifits</p>
      </div>
      <div className="mb-8 py-4">
        <HeaderText className="white-text-shadow mb-10">Benefits</HeaderText>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-4 text-white justify-items-center">
          {BENIFIT_ITEMS.map((item: BENIFIT_DATA, index: number) => (
            <BenifitCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBenifits;
