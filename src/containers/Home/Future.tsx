import FutureCard from "../../components/Cards/Home/Future";
import { FUTURE_ITEMS } from "../../constants/Items";
import { FUTURE_DATA } from "../../types";

const HomeFuture = () => {
  return (
    <section className="w-full mt-8 px-4 text-gray-800 bg-full-screen-shadow bg-no-repeat text-center py-16">
      <h1 className="text-5xl font-bold text-white mb-4 white-text-shadow">
        The Future of Secure Crypto Management
      </h1>
      <h2 className="text-2xl text-gray-300 mb-8">
        Key Features that Empower Your Crypto Journey
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto mb-16">
        Unveil the cutting-edge features of our multisig wallet, crafted to
        provide top-notch security and control over your digital assets. Here
        are the six main features that set our wallet apart in the industry.{" "}
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {FUTURE_ITEMS.map((item: FUTURE_DATA, index: number) => (
          <FutureCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default HomeFuture;
