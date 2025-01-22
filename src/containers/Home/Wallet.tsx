import WalletCard from "../../components/Cards/Home/Wallet";

const HomeWallet = () => {
  return (
    <section className="w-full py-16 px-4 text-gray-800">
      <section className="w-full px-4 text-gray-800">
        <div className="max-w-5xl mx-auto py-12 px-4 gap-8 text-white bg-gradient-to-t from-zinc-900 to-neutral-900">
          <div className="md:col-span-2 max-w-3xl mx-auto">
            <h2 id="why-choose-heading" className="text-4xl font-semibold">
              Why Choose Our Multisig Wallet?
            </h2>
            <h3 className="font-light text-stone-300 text-lg">
              Unmatched Security and Total Control for Your Digital Assets
            </h3>
            <div className="max-w-6xl mx-auto space-y-16 mt-10">
              <WalletCard />
              <WalletCard />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeWallet;
