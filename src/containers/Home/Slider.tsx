import { Slider } from "../../components/Animation";
import { COIN_ITEMS } from "../../constants/Items";
import { COIN_DATA } from "../../types";

const HomeSlider = () => {
  return (
    <div
      className="flex w-full gap-[24px] overflow-x-hidden py-2"
      style={{ transform: "rotate(-2deg)" }}
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
