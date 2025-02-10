import { currency } from "../../assets/image";
import { InitialAppearance } from "../../components/Animation";
import SupportCard from "../../components/Cards/Home/Support";
import { HeaderText, NormalText } from "../../components/common/Text";
import { SUPPORT_ITEMS } from "../../constants/Items";
import { SUPPORT_DATA } from "../../types";

const HomeSupport = () => {
  const animations = {
    header: {
      from: { top: 50, left: 0 },
      to: { top: 0, left: 0 },
      time: 1,
      delay: 0,
    },
    sub: {
      from: { top: 50, left: 0 },
      to: { top: 0, left: 0 },
      time: 1,
      delay: 0.5,
    },
    desc: {
      from: { top: 50, left: 0 },
      to: { top: 0, left: 0 },
      time: 1,
      delay: 1,
    },
    card: {
      from: { top: 100, left: 0 },
      to: { top: 0, left: 0 },
      time: 1,
    },
  };

  return (
    <section className="w-full py-16 px-4 text-center justify-items-center">
      <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
        <img className="w-[20px] h-[20px]" src={currency} alt="star" />
        <p className="text-[16px] text-white">Token Currencies</p>
      </div>
      <InitialAppearance
        className="relative"
        from={animations.header.from}
        to={animations.header.to}
        time={animations.header.time}
        delay={animations.header.delay}
      >
        <HeaderText className="mb-4 white-text-shadow">
          Supported Blockchains and Currencies
        </HeaderText>
      </InitialAppearance>
      <InitialAppearance
        className="relative"
        from={animations.sub.from}
        to={animations.sub.to}
        time={animations.sub.time}
        delay={animations.sub.delay}
      >
        <h2 className="text-2xl text-gray-300 mb-8">
          Comprehensive Support for All Your Digital Assets
        </h2>
      </InitialAppearance>
      <InitialAppearance
        className="relative"
        from={animations.desc.from}
        to={animations.desc.to}
        time={animations.desc.time}
        delay={animations.desc.delay}
      >
        <NormalText className="max-w-4xl mx-auto mb-16">
          Our platform supports a wide range of blockchains, cryptocurrencies,
          and NFTs across various protocols. Easily manage your digital assets
          and collectibles, all in one secure and versatile app.
        </NormalText>
      </InitialAppearance>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {SUPPORT_ITEMS.map((item: SUPPORT_DATA, index: number) => (
          <InitialAppearance
            className="relative"
            from={animations.card.from}
            to={animations.card.to}
            time={animations.card.time}
            delay={index * 0.5}
          >
            <SupportCard key={index} item={item} />
          </InitialAppearance>
        ))}
      </div>
    </section>
  );
};

export default HomeSupport;
