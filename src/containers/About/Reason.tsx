import { key1, key2, key3 } from "../../assets/image";

const Reason = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-lime-400">TrustVault</span>?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <img src={key2} alt="Innovation" className="w-12 h-12 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Innovative Security Solutions
                </h3>
                <p className="text-gray-300">
                  We leverage the latest advancements in cryptographic research
                  to provide state-of-the-art security for your digital assets.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img src={key3} alt="Customization" className="w-12 h-12 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Tailored for Diverse Needs
                </h3>
                <p className="text-gray-300">
                  Whether you're an individual investor or part of an
                  organization, our divisible signature technology offers
                  customizable security settings.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img src={key1} alt="Support" className="w-12 h-12 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                <p className="text-gray-300">
                  Our team of experts is available to assist you with any
                  questions or concerns, ensuring a seamless experience in
                  managing your digital assets.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Join TrustVault Today</h3>
            <p className="text-gray-300 mb-6">
              Experience the future of digital asset security with our advanced
              divisible signature technology. Protect your investments with
              confidence, knowing that your assets are secured by the most
              innovative solutions available in the industry.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
