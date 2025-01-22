import { BENIFIT_DATA } from "../../../types";
import { CardDescText, CardSubText, CardTitleText } from "../../common/Text";

const BenifitCard: React.FC<{ item: BENIFIT_DATA }> = ({ item }) => {
  return (
    <div className="flex flex-col items-center text-center min-h-64 h-full px-4 bg-[#09090a] border border-solid border-[#1b1b20] rounded-3xl py-4">
      <div>
        <img src={item.img} alt="Feature 1" className="mb-7" />
      </div>
      <div className="mt-4">
        <CardTitleText className="mb-2">{item.title}</CardTitleText>
        <CardSubText className="mb-5 w-full sm:w-48 mx-auto">
          {item.sub}
        </CardSubText>
        <CardDescText className="w-full sm:w-72 mx-auto flex-grow">
          {item.desc}
        </CardDescText>
      </div>
    </div>
  );
};

export default BenifitCard;
