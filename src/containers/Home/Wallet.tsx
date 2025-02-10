import { homeHeader, mask } from "../../assets/image";
import WalletCard from "../../components/Cards/Home/Wallet";
import { HeaderText, NormalText } from "../../components/common/Text";
import { WALLET_ITEMS } from "../../constants/Items";
import { WALLET_DATA } from "../../types";

const HomeWallet = () => {
  return (
    <section className="w-full py-16 px-4 text-gray-800 relative">
      <section className="w-full px-4 text-gray-800">
        <div className="max-w-5xl mx-auto py-12 px-4 gap-8">
          <div className="md:col-span-2 max-w-4xl mx-auto">
            <HeaderText className="text-white white-text-shadow !block">
              Why Choose Our Multisig Wallet?
            </HeaderText>
            <NormalText className="text-center">
              Unmatched Security and Total Control for Your Digital Assets
            </NormalText>
            <div className="flex flex-col xl:flex-row gap-[50px] w-full h-max xl:h-[784px] items-center overflow-y-hidden">
              <div className="max-w-6xl mx-auto space-y-16 mt-5 flex w-1/2 flex-col">
                {WALLET_ITEMS.map((item: WALLET_DATA, index: number) => (
                  <WalletCard key={index} item={item} />
                ))}
              </div>
              <div className="w-1/2 aspect-square h-[280px] md:h-[584px] relative bg-black">
                <div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 rounded-full h-[280px] md:h-[300px] aspect-square"
                  style={{
                    background:
                      "radial-gradient(50% 49.99999999999999% at 50% 49.99999999999999%,#ffffff 0%,rgba(255,255,255,0) 100%)",
                    filter: "blur(100px)",
                  }}
                />
                <div className="flex flex-col relative items-center w-full h-full rounded-[24px] overflow-y-hidden border border-solid border-[#28282c]">
                  <img
                    className="w-[282px] h-full absolute top-0 md:top-[72px] z-2 rounded-[32px] object-cover"
                    src={homeHeader}
                    alt="phone4"
                  />
                </div>
                <img
                  className="w-full h-[184px] md:h-[254px] absolute bottom-0 z-4"
                  src={mask}
                  alt="phone4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeWallet;
