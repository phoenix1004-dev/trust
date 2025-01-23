import { face } from "../../assets/image";
import { InitialAppearance } from "../../components/Animation";
import BenifitCard from "../../components/Cards/Home/Benifit";
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
      className="w-full mt-8 px-4 bg-full-screen-shadow bg-no-repeat text-center pt-10 justify-items-center"
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
        delay={animations.header.delay}
      >
        <div className="flex w-max bg-[#131315] border border-solid border-[#1d1d20] gap-[3px] px-[12px] py-[10px] rounded-full items-center">
          <img className="w-[20px] h-[20px]" src={face} alt="star" />
          <p className="text-[16px] text-white">Benifits</p>
        </div>
      </InitialAppearance>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-4 text-white justify-items-center">
          {BENIFIT_ITEMS.map((item: BENIFIT_DATA, index: number) => (
            <InitialAppearance
              className="relative justify-items-center"
              from={animations.card[index].from}
              to={animations.card[index].to}
              time={animations.card[index].time}
              delay={index * 0.5}
            >
              <BenifitCard key={index} item={item} />
            </InitialAppearance>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBenifits;
