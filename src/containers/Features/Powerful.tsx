import { power1, power2, power3 } from "../../assets/image";

const Powerful = () => {
  return (
    <section className="w-full px-4 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <img src={power1} alt="Wallet Options" className="w-16 h-16 mb-6" />
            <h3 className="text-xl font-bold mb-4">Versatile Wallet Options</h3>
            <p className="text-gray-300">
              Choose between intuitive single-signature wallets for simple
              transactions or advanced multi-signature wallets for enhanced
              security. Customize your setup based on your needs.
            </p>
          </div>
          <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <img src={power2} alt="SafeSend" className="w-16 h-16 mb-6" />
            <h3 className="text-xl font-bold mb-4">SafeSend Technology</h3>
            <p className="text-gray-300">
              Our revolutionary SafeSend feature protects large transfers with
              OTP verification and test transactions, ensuring your funds always
              reach their intended destination.
            </p>
          </div>
          <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <img
              src={power3}
              alt="DEX Integration"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Integrated DEX Access</h3>
            <p className="text-gray-300">
              Trade cryptocurrencies directly within the app through our
              seamless integration with multiple decentralized exchanges. Access
              vast trading opportunities in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Powerful;
