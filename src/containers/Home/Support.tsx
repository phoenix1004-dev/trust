import SupportCard from "../../components/Cards/Home/Support";
import { HeaderText, NormalText } from "../../components/common/Text";
import { SUPPORT_ITEMS } from "../../constants/Items";
import { SUPPORT_DATA } from "../../types";

const HomeSupport = () => {
  return (
    <section className="w-full py-16 px-4 text-center">
      <HeaderText className="mb-4 white-text-shadow">
        Supported Blockchains and Currencies
      </HeaderText>
      <h2 className="text-2xl text-gray-300 mb-8">
        Comprehensive Support for All Your Digital Assets
      </h2>
      <NormalText className="max-w-4xl mx-auto mb-16">
        Our platform supports a wide range of blockchains, cryptocurrencies, and
        NFTs across various protocols. Easily manage your digital assets and
        collectibles, all in one secure and versatile app.
      </NormalText>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SUPPORT_ITEMS.map((item: SUPPORT_DATA, index: number) => (
          <SupportCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default HomeSupport;
