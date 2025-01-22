import { support1 } from "../../../assets/image";

const SupportCard = () => {
  return (
    <div className="bg-[#1a1f2e] rounded-xl p-6 text-left">
      <h3 className="text-xl font-semibold text-white mb-4">
        Supported cryptocurrencies
      </h3>
      <p className="text-gray-400 mb-4">TOP - 30 Coin Market Cap</p>
      <img src={support1} alt="Bitcoin" className="w-56 h-56" />
    </div>
  );
};

export default SupportCard;
