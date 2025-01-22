import { WALLET_DATA } from "../../../types";

const WalletCard: React.FC<{ item: WALLET_DATA }> = ({ item }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 py-6 rounded-lg">
      <div className="flex-1 mb-4 mt-4 md:mt-0">
        <h2 className="text-2xl text-white font-semibold mb-2">{item.title}</h2>
        <p className="text-[#94969b] mb-3">{item.sub}</p>
        <div className="relative">
          <button className="relative z-10 bg-gradient-to-t from-neutral-950 to-gray-800 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition mt-2">
            Learn More
          </button>
        </div>
      </div>
      <img
        src={item.img}
        className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
        alt="wallet1"
      />
    </div>
  );
};

export default WalletCard;
