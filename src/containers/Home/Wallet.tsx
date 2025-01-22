import WalletCard from "../../components/Cards/Home/Wallet";
import { HeaderText, NormalText } from "../../components/common/Text";
import { WALLET_ITEMS } from "../../constants/Items";
import { WALLET_DATA } from "../../types";

const HomeWallet = () => {
  return (
    <section className="w-full py-16 px-4 text-gray-800">
      <section className="w-full px-4 text-gray-800">
        <div className="max-w-5xl mx-auto py-12 px-4 gap-8 bg-[#09090a] border border-solid border-[#1b1b20]">
          <div className="md:col-span-2 max-w-3xl mx-auto">
            <HeaderText className="text-white white-text-shadow !block">
              Why Choose Our Multisig Wallet?
            </HeaderText>
            <NormalText className="text-center">
              Unmatched Security and Total Control for Your Digital Assets
            </NormalText>
            <div className="max-w-6xl mx-auto space-y-16 mt-10">
              {WALLET_ITEMS.map((item: WALLET_DATA, index: number) => (
                <WalletCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeWallet;
