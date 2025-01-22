import { FAQAnimation } from "../../components/Animation";
import { HeaderText, NormalText } from "../../components/common/Text";
import { FAQ_ITEMS } from "../../constants/Items";
import { FAQ_DATA } from "../../types";

const HomeFAQs = () => {
  return (
    <section className="w-full px-4 py-24 relative overflow-hidden">
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
