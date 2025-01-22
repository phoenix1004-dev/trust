import { homeHeader } from "../../assets/image";

const HomeHeader = () => {
  return (
    <section className="w-full mx-auto sm:w-2/4 mt-[107px] font-bold text-white py-14 text-center flex flex-col items-center justify-center">
      <div className="relative mb-7">
        <h1 className="text-5xl sm:text-5xl lg:text-8xl font-bold">
          <span className="white-text-shadow">next</span>
          <span className="text-lime-400">level</span>
        </h1>
        <p className="text-neutral-200 text-sm sm:text-lg md:text-xl font-light">
          advanced self custody technology
        </p>
      </div>
      <img
        src={homeHeader}
        alt="Next Level Technology"
        className="main-mobiles responsive-image"
      ></img>
    </section>
  );
};

export default HomeHeader;
