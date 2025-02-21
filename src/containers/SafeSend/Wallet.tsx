import { walletPhone1, walletPhone2, walletPhone3 } from "../../assets/image";
import { AnimationButton } from "../../components/Animation";

const Wallet = () => {
  return (
    <div className="max-w-6xl mx-auto  gap-8 text-white rounded-custom pb-[10px]">
      <div className="md:col-span-2 max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold">
          Why Choose Our Multisig Wallet?
        </h2>
        <h3 className="font-light text-stone-300 text-lg">
          Unmatched Security and Total Control for Your Digital Assets
        </h3>
        <div className="max-w-6xl mx-auto space-y-16 mt-10">
          <div className="flex flex-col md:flex-row items-start md:space-x-8 py-6 rounded-lg">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">How SafeSend Works</h2>
              <div className="flex items-center gap-2">
                <div className="rounded-full h-9 w-9 bg-white py-2 px-2 text-center flex items-center justify-center">
                  <p className="text-black font-bold text-lg">1</p>
                </div>
                <h3 className="text-lg font-bold">Initiate Transfer</h3>
              </div>
              <p className="text-stone-300 mb-3 mt-1">
                Enter the recipient's address and amount.
              </p>
              <div className="flex items-center gap-2">
                <div className="rounded-full h-9 w-9 bg-white py-2 px-2 text-center flex items-center justify-center">
                  <p className="text-black font-bold text-lg">2</p>
                </div>
                <h3 className="text-lg font-bold">Verification</h3>
              </div>
              <p className="text-stone-300 mb-3 mt-1">
                SafeSend sends a small test transfer to verify the recipient's
                address.
              </p>
              <div className="flex items-center gap-2">
                <div className="rounded-full h-9 w-9 bg-white py-2 px-2 text-center flex items-center justify-center">
                  <p className="text-black font-bold text-lg">3</p>
                </div>
                <h3 className="text-lg font-bold">One-Time Password (OTP):</h3>
              </div>
              <p className="text-stone-300 mb-3 mt-1">
                The recipient receives an OTP to confirm the transfer.
              </p>
              <div className="flex items-center gap-2">
                <div className="rounded-full h-9 w-9 bg-white py-2 px-2 text-center flex items-center justify-center">
                  <p className="text-black font-bold text-lg">4</p>
                </div>
                <h3 className="text-lg font-bold">Confirmation</h3>
              </div>
              <p className="text-stone-300 mb-3 mt-1">
                Once verified, the full amount is released.
              </p>
            </div>
            <img
              src={walletPhone1}
              alt="wallet1"
              className="w-full md:w-1/2 rounded-lg"
            />
          </div>
          <div className="flex flex-col md:flex-row items-start md:space-x-8 py-6 rounded-lg">
            <img
              src={walletPhone2}
              alt="wallet2"
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mt-4 mb-4">
                Full Control and Flexibility
              </h2>
              <p className="text-stone-300 mb-1">
                - Eliminates Crypto Clipping: No more lost funds due to
                incorrect addresses.
              </p>
              <p className="text-stone-300 mb-1">
                - Eliminates Crypto Clipping: No more lost funds due to
                incorrect addresses.
              </p>
              <p className="text-stone-300 mb-1">
                - Eliminates Crypto Clipping: No more lost funds due to
                incorrect addresses.
              </p>
              <p className="text-stone-300 mb-1">
                - Eliminates Crypto Clipping: No more lost funds due to
                incorrect addresses.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10">
          <div className="flex flex-col md:flex-row items-start md:space-x-8 rounded-lg">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">
                Enhanced Security and Peace of Mind
              </h2>
              <p className="text-stone-300 mb-1">
                - Eliminates Crypto Clipping: No more lost funds due to
                incorrect addresses.
              </p>
              <p className="text-stone-300 mb-1">
                - Eliminates Crypto Clipping: No more lost funds due to
                incorrect addresses.
              </p>
              <p className="text-stone-300 mb-1">
                - Eliminates Crypto Clipping: No more lost funds due to
                incorrect addresses.
              </p>{" "}
              <p className="text-stone-300 mb-1">
                - Eliminates Crypto Clipping: No more lost funds due to
                incorrect addresses.
              </p>
            </div>
            <img
              src={walletPhone3}
              alt="wallet3"
              className="w-full md:w-1/2 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 mt-8 justify-center relative">
        <button className="relative rounded-3xl px-4 py-2 lg:px-8 lg:py-2 border-2 border-gray-500">
          Download
        </button>
        <AnimationButton>Get in touch</AnimationButton>
      </div>
    </div>
  );
};

export default Wallet;
