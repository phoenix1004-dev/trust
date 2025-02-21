import { InitialAppearance } from "../../components/Animation";
import Card from "../../components/common/Card";
import { HeaderText } from "../../components/common/Text";
import { BENIFIT_ITEMS } from "../../constants/Items";
import { BENIFIT_DATA } from "../../types";

const HomeBenifits = () => {
  const animations = {
    header: {
      from: { top: 50, left: 0 },
      to: { top: 0, left: 0 },
      time: 1,
      delay: 0,
    },
    card: [
      {
        from: { top: 0, left: -50 },
        to: { top: 0, left: 0 },
        time: 1,
      },
      {
        from: { top: 50, left: 0 },
        to: { top: 0, left: 0 },
        time: 1,
      },
      {
        from: { top: 0, left: 50 },
        to: { top: 0, left: 0 },
        time: 1,
      },
    ],
  };

  return (
    <section
      id="benefits"
      className="w-full mt-8 px-4 bg-full-screen-shadow bg-no-repeat text-center pt-10 justify-items-center relative bg-black z-[10]"
      style={{
        background:
          "radial-gradient(27.274516120515756% 35.90163801120711% at 50% -2.7755575615628914e-14%,#131315 0%,rgba(0,0,0,1) 100%)",
      }}
    >
      <div
        className="w-full h-[1px] absolute top-0 left-0 right-0 overflow-visable z-1"
        style={{
          background:
            "radial-gradient(40% 50% at 50% 50%,#28282c 0%,rgb(0,0,0) 100%)",
        }}
      />
      <InitialAppearance
        className="relative justify-items-center"
        from={animations.header.from}
        to={animations.header.to}
        time={animations.header.time}
        delay={animations.header.delay + 1}
      >
        <div className="mb-8 py-4">
          <HeaderText className="white-text-shadow mb-10">Benefits</HeaderText>
        </div>
      </InitialAppearance>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6 py-4 text-white justify-items-center">
          {BENIFIT_ITEMS.map((item: BENIFIT_DATA, index: number) => (
            <InitialAppearance
              key={index}
              className="relative justify-items-center"
              from={animations.card[index].from}
              to={animations.card[index].to}
              time={animations.card[index].time}
              delay={index * 0.5}
            >
              <Card
                title={item.title}
                image={item.img}
                sub={item.sub}
                desc={item.desc}
              />
            </InitialAppearance>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBenifits;
