import { key1, key2, key3 } from "../../assets/image";

const KeyFeatures = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300">
            <img
              src={key1}
              alt="Divisible Signature"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-xl font-bold mb-4">
              Divisible Signature Technology
            </h3>
            <p className="text-gray-300">
              Unlike conventional multisig wallets that require a fixed number
              of signatures, our divisible signature approach allows for more
              granular control over transaction approvals.
            </p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300">
            <img
              src={key2}
              alt="Enhanced Security"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-xl font-bold mb-4">
              Enhanced Security Protocols
            </h3>
            <p className="text-gray-300">
              By distributing authorization across multiple parties with
              divisible signatures, we significantly reduce the risk of
              unauthorized access.
            </p>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300">
            <img src={key3} alt="User Interface" className="w-16 h-16 mb-6" />
            <h3 className="text-xl font-bold mb-4">User-Friendly Interface</h3>
            <p className="text-gray-300">
              Our platform is designed with simplicity in mind, enabling users
              to manage their digital assets effortlessly while benefiting from
              advanced security features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
