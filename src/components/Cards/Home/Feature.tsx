import { FEATURE_DATA } from "../../../types";
import { CardDescText, CardSubText, CardTitleText } from "../../common/Text";

const FeatureCard: React.FC<{ item: FEATURE_DATA }> = ({ item }) => {
  return (
    <div className="px-6 py-6 border border-solid border-[#1b1b20] rounded-3xl shadow-md bg-[#09090a] flex flex-col justify-between items-start min-h-[280px]">
      <div className="flex-shrink-0">
        <img
          src={item.icon}
          className="w-13 mx-auto"
          alt="Multi-Signature Technology"
        />
      </div>
      <div className="flex-1 flex flex-col justify-evenly gap-[8px]">
        <div>
          <CardTitleText>{item.title}</CardTitleText>
          <CardSubText className="font-light italic">{item.sub}</CardSubText>
        </div>
        <div>
          <CardDescText className="font-light">{item.desc}</CardDescText>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
