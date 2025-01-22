import SupportCard from "../../components/Cards/Home/Support";

const HomeSupport = () => {
  return (
    <section className="w-full py-16 px-4 text-center">
      <h1 className="text-5xl font-bold text-white mb-4 white-text-shadow">
        Supported Blockchains and Currencies
      </h1>
      <h2 className="text-2xl text-gray-300 mb-8">
        Comprehensive Support for All Your Digital Assets
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto mb-16">
        Our platform supports a wide range of blockchains, cryptocurrencies, and
        NFTs across various protocols. Easily manage your digital assets and
        collectibles, all in one secure and versatile app.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SupportCard />
        <SupportCard />
        <SupportCard />
        <SupportCard />
      </div>
    </section>
  );
};

export default HomeSupport;
