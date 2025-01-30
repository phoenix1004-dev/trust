import { InitialAppearance } from "../../components/Animation";
import Card from "../../components/common/Card";
import { HeaderText, NormalText } from "../../components/common/Text";
import { FUTURE_ITEMS } from "../../constants/Items";
import { FUTURE_DATA } from "../../types";

const HomeFuture = () => {
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
    <section className="w-full mt-8 px-4 text-gray-800 bg-full-screen-shadow bg-no-repeat text-center py-16">
      <InitialAppearance
        className="relative"
        from={animations.header.from}
        to={animations.header.to}
        time={animations.header.time}
        delay={animations.header.delay}
      >
        <HeaderText className="mb-4 white-text-shadow">
          The Future of Secure Crypto Management
        </HeaderText>
      </InitialAppearance>
      <InitialAppearance
        className="relative"
        from={animations.sub.from}
        to={animations.sub.to}
        time={animations.sub.time}
        delay={animations.sub.delay}
      >
        <NormalText className="mb-8">
          Key Features that Empower Your Crypto Journey
        </NormalText>
      </InitialAppearance>
      <InitialAppearance
        className="relative"
        from={animations.desc.from}
        to={animations.desc.to}
        time={animations.desc.time}
        delay={animations.desc.delay}
      >
        <p className="text-gray-400 max-w-4xl mx-auto mb-16">
          Unveil the cutting-edge features of our multisig wallet, crafted to
          provide top-notch security and control over your digital assets. Here
          are the six main features that set our wallet apart in the industry.{" "}
        </p>
      </InitialAppearance>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 text-white justify-items-center">
        {FUTURE_ITEMS.map((item: FUTURE_DATA, index: number) => (
          <InitialAppearance
            key={index}
            className="relative"
            from={animations.card.from}
            to={animations.card.to}
            time={animations.card.time}
            delay={index * 0.7}
          >
            <Card title={item.title} sub={item.sub} image={item.img} />
          </InitialAppearance>
        ))}
      </div>
    </section>
  );
};

export default HomeFuture;
