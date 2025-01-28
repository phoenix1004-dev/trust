import { Slider } from "../../components/Animation";
import { COIN_ITEMS } from "../../constants/Items";
import { COIN_DATA } from "../../types";

const HomeSlider = () => {
  return (
    <div
      className="flex gap-[24px] overflow-x-hidden py-2"
      style={{
        width: "calc(100vw - 3px)",
        maskImage:
          "linear-gradient(to right,transparent 0, black 128px, black calc(100% - 200px),transparent 100%)",
      }}
    >
      <Slider dir="right" pos="-50%" time={40}>
        {COIN_ITEMS.map((coin: COIN_DATA, index: number) => (
          <div key={index} className="w-max flex gap-3 items-center">
            <img
              className="w-[55px] h-[55px]"
              src={coin.icon}
              alt={`company-${index}`}
            />
            <p className="text-[20px]">{coin.title}</p>
          </div>
        ))}
        {COIN_ITEMS.map((coin: COIN_DATA, index: number) => (
          <div key={index} className="w-max flex gap-3 items-center">
            <img
              className="w-[55px] h-[55px]"
              src={coin.icon}
              alt={`company-${index}`}
            />
            <p className="text-[20px]">{coin.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
