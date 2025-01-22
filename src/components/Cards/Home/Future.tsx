import { FUTURE_DATA } from "../../../types";
import { CardDescText, CardTitleText } from "../../common/Text";

const FutureCard: React.FC<{ item: FUTURE_DATA }> = ({ item }) => {
  return (
    <div className="relative px-6 py-10 border rounded-3xl shadow-md mb-6 justify-items-center bg-[#09090a] border border-solid border-[#1b1b20]">
      <div className="border border-solid border-[#28282c] bg-[#18181a] p-[14px] rounded-[14px] w-max mb-3">
        <img className="w-[30px] h-[30px]" src={item.img} alt={item.title} />
      </div>
      <CardTitleText className="mb-2">{item.title}</CardTitleText>
      <CardDescText className="mt-2">{item.sub}</CardDescText>
    </div>
  );
};

export default FutureCard;
