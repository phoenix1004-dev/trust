import { safeSendHeader } from "../../assets/image";

const Introduce = () => {
  return (
    <section className="w-full px-4 z-[10]">
      <div className="max-w-6xl mx-auto px-12  gap-8 text-white rounded-custom">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 py-6 rounded-lg">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-2 w-1/2">
              Introducing <span className="text-lime-400">SafeSend</span>{" "}
              <span className="text-3xl">by trustvault</span>
            </h2>
            <h3 className="text-xl font-bold mb-4 mt-4">
              Secure and Stress-Free Crypto Transfers
            </h3>
            <p className="text-stone-300 mb-3">
              Say goodbye to transaction anxiety and hello to seamless, secure
              transfers with SafeSend, the innovative feature that protects your
              crypto assets.{" "}
            </p>
          </div>
          <img
            src={safeSendHeader}
            alt="header"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
