import { SUPPORT_DATA } from "../../../types";
import { BgGradient } from "../../common/Background";
import { CardDescText, CardTitleText } from "../../common/Text";

const SupportCard: React.FC<{ item: SUPPORT_DATA }> = ({ item }) => {
  return (
    <div className="relative bg-[#09090a] border border-solid border-[#1b1b20] rounded-xl p-6 text-left justify-items-center h-full">
      <CardTitleText className="mb-4">{item.title}</CardTitleText>
      <CardDescText className="mb-4">{item.sub}</CardDescText>
      <div className="relative">
        <img src={item.img} alt="Bitcoin" className="w-56 h-56" />
        <BgGradient />
      </div>
    </div>
  );
};

export default SupportCard;
