import { FUTURE_DATA } from "../../../types";
import { CardDescText, CardTitleText } from "../../common/Text";

const FutureCard: React.FC<{ item: FUTURE_DATA }> = ({ item }) => {
  return (
    <div className="relative px-6 py-10 border rounded-3xl shadow-md mb-6">
      <img src={item.img} className="w-15 py-4 ml-auto" alt="Feature 1" />
      <CardTitleText className="mb-2">{item.title}</CardTitleText>
      <CardDescText className="mt-2">{item.sub}</CardDescText>
    </div>
  );
};

export default FutureCard;
