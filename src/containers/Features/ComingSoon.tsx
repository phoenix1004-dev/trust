import { blueBlur, soon1, soon2 } from "../../assets/image";

const ComingSoon = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exciting new features on the horizon to enhance your crypto
            experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 p-8 rounded-3xl border border-gray-800">
            <div className="flex items-center space-x-4 mb-6">
              <img src={soon1} alt="Onramp" className="w-12 h-12" />
              <h3 className="text-2xl font-bold">Crypto Onramps</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Seamlessly convert your fiat currency to cryptocurrencies directly
              within the app. Our upcoming onramp services will make entering
              the crypto market easier than ever.
            </p>
            <div className="relative mt-6">
              <img
                src={blueBlur}
                className="absolute -bottom-5 left-5"
                alt="Button Blur"
              />
              <button className="relative z-10 bg-gradient-to-t from-neutral-950 to-gray-800 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-t from-neutral-950 to-zinc-800 p-8 rounded-3xl border border-gray-800">
            <div className="flex items-center space-x-4 mb-6">
              <img src={soon2} alt="Offramp" className="w-12 h-12" />
              <h3 className="text-2xl font-bold">Crypto Offramps</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Convert your cryptocurrencies back to fiat with ease. Our offramp
              services will provide a smooth exit pathway when you need to
              access traditional currencies.
            </p>
            <div className="relative mt-6">
              <img
                src={blueBlur}
                className="absolute -bottom-5 left-5"
                alt="Button Blur"
              />
              <button className="relative z-10 bg-gradient-to-t from-neutral-950 to-gray-800 border-2 border-indigo-500 text-white py-3 px-7 rounded-full hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
