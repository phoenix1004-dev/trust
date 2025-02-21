import { add, error, greenLine, redLine } from "../../assets/image";

const Problem = () => {
  return (
    <div className="max-w-7xl flex flex-nowrap small-wrap justify-between mx-auto px-1 gap-8 text-white pt-[50px]">
      <div className="container w-full md:w-1/2">
        <div className="w-full flex items-center justify-evenly">
          <img src={error} alt="Exit Icon" />
          <h3 className="text-xl font-bold">
            Common Problems in Crypto Payments
          </h3>
          <img src={add} alt="Plus Icon" />
        </div>
        <div
          className="w-full bg-gray-800 py-6 px-6 border-2 border-white relative mt-4"
          style={{ borderRadius: "36px" }}
        >
          <img
            src={greenLine}
            style={{ position: "absolute", right: "-4px", top: "110px" }}
            alt="green line"
          />
          <h3 className="text-xl font-bold mt-5">Crypto Clipping</h3>
          <p className="font-normal mt-1">
            Accidental clipping of malware infected addresses when copying and
            pasting can lead to funds being sent to the wrong recipient,
            resulting in a permanent loss of assets.
          </p>
          <h3 className="text-xl font-bold mt-5">Incorrect Address Sends</h3>
          <p className="font-normal mt-1">
            Sending funds to an incorrect or invalid address can be
            catastrophic, with no way to recover the lost cryptocurrency.
          </p>
          <h3 className="text-xl font-bold mt-5">High-Stress Transactions</h3>
          <p className="font-normal mt-1">
            Sending large amounts can be nerve-wracking, with the fear of making
            a mistake that could cost thousands or even millions in assets.
          </p>
          <h3 className="text-xl font-bold mt-5">Lack of Verification</h3>
          <p className="font-normal mt-1">
            Many wallets don't offer a confirmation step before finalizing
            transactions, increasing the risk of errors and misdirected funds.
          </p>
          <h3 className="text-xl font-bold mt-5">Irreversible Errors</h3>
          <p className="font-normal mt-1">
            Once a crypto transaction is sent, it’s irreversible. This leaves no
            room for correcting mistakes or retrieving funds sent to the wrong
            address.
          </p>
        </div>
      </div>
      <div className="container w-full md:w-1/2">
        <div className="w-full flex items-center justify-evenly">
          <img src={error} alt="Exit Icon" />
          <h3 className="text-xl font-bold">
            Common Problems in Crypto Payments
          </h3>
          <img src={add} alt="Plus Icon" />
        </div>
        <div
          className="w-full bg-gray-800 py-6 px-6 border-2 border-stone-300 relative mt-4"
          style={{ borderRadius: "36px" }}
        >
          <img
            src={redLine}
            style={{ position: "absolute", left: "-4px", top: "110px" }}
            alt="x"
          />
          <h3 className="text-xl font-bold mt-5">Crypto Clipping</h3>
          <p className="font-normal mt-1">
            Accidental clipping of malware infected addresses when copying and
            pasting can lead to funds being sent to the wrong recipient,
            resulting in a permanent loss of assets.
          </p>
          <h3 className="text-xl font-bold mt-5">Incorrect Address Sends</h3>
          <p className="font-normal mt-1">
            Sending funds to an incorrect or invalid address can be
            catastrophic, with no way to recover the lost cryptocurrency.
          </p>
          <h3 className="text-xl font-bold mt-5">High-Stress Transactions</h3>
          <p className="font-normal mt-1">
            Sending large amounts can be nerve-wracking, with the fear of making
            a mistake that could cost thousands or even millions in assets.
          </p>
          <h3 className="text-xl font-bold mt-5">Lack of Verification</h3>
          <p className="font-normal mt-1">
            Many wallets don’t offer a confirmation step before finalizing
            transactions, increasing the risk of errors and misdirected funds.
          </p>
          <h3 className="text-xl font-bold mt-5">Irreversible Errors</h3>
          <p className="font-normal mt-1">
            Once a crypto transaction is sent, it’s irreversible. This leaves no
            room for correcting mistakes or retrieving funds sent to the wrong
            address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
