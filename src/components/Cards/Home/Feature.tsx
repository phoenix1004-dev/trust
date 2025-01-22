import { technology } from "../../../assets/image";

const FeatureCard = () => {
  return (
    <div className="px-6 py-6 border rounded-3xl shadow-md bg-gradient-to-t from-neutral-950 to-zinc-900 flex flex-col justify-between items-start min-h-[280px]">
      <div className="flex-shrink-0">
        <img
          src={technology}
          className="w-13 mx-auto"
          alt="Multi-Signature Technology"
        />
      </div>
      <div className="flex-1 flex flex-col justify-evenly">
        <div>
          <h2 className="text-xl font-semibold">Multi-Signature Technology</h2>
          <h4 className="font-light italic text-base md:text-md">
            An additional layer of security
          </h4>
        </div>
        <div>
          <p className="text-base md:text-md lg:text-md text-stone-300 font-light">
            Require multiple signatures for transactions, ensuring enhanced
            protection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
