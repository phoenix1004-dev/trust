import { question } from "../../assets/image";
import { FAQAnimation } from "../../components/Animation";
import { HeaderText, NormalText } from "../../components/common/Text";
import { FAQ_ITEMS } from "../../constants/Items";
import { FAQ_DATA } from "../../types";

const HomeFAQs = () => {
  return (
    <section
      id="faq"
      className="w-full px-4 py-24 relative overflow-hidden justify-items-center"
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
      <div className="w-full flex justify-center">
        <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
          <img className="w-[20px] h-[20px]" src={question} alt="star" />
          <p className="text-[16px] text-white">FAQs</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-white relative">
        <div className="text-center mb-16">
          <HeaderText className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </HeaderText>
          <NormalText className="mt-4">
            Everything you need to know about TrustVault
          </NormalText>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item: FAQ_DATA, index: number) => (
            <FAQAnimation key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQs;
