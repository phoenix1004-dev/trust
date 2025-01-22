import { one, two } from "../../assets/image";

const HomeWorks = () => {
  return (
    <section className="w-full mt-16 mb-12 bg-full-screen-shadow bg-no-repeat">
      <div className="max-w-6xl mx-auto text-white">
        <div className="text-center mb-10">
          <h2 className="text-center text-4xl font-extrabold mb-8 white-text-shadow">
            How it Works
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 space-y-6 lg:space-y-0">
          <div className="first-vector-card flex flex-col items-center w-full lg:w-[45%] px-4 mx-auto">
            <div className="relative mb-6 w-full flex justify-start">
              <img
                src={one}
                className="one-vector absolute -left-12 top-1/2 transform -translate-y-1/2 z-0 hidden lg:block"
                alt="Secure Setup"
                style={{ width: "15%" }}
              />
              <div className="bg-gray-800 rounded-3xl py-8 px-4 w-full min-h-[200px] relative z-10">
                <h3 className="text-2xl font-semibold mb-2 sm:text-xl">
                  Secure Setup
                </h3>
                <p className="text-gray-400">
                  Create your multisig wallet by selecting the number of
                  signatures required to approve a transaction. Invite trusted
                  parties to join the wallet, each with their own private key
                  securely stored on their device.
                </p>
              </div>
            </div>
          </div>
          <div className="second-vector-card flex flex-col items-center w-full lg:w-[45%] px-4 mx-auto">
            <div className="relative mb-6 w-full flex justify-start">
              <img
                src={two}
                className="two-vector absolute -left-12 top-1/2 transform -translate-y-1/2 z-0 hidden lg:block"
                alt="Approve Transactions"
                style={{ width: "15%" }}
              />
              <div className="bg-gray-800 rounded-3xl py-8 px-4 w-full min-h-[200px] relative z-10">
                <h3 className="text-2xl font-semibold mb-2 sm:text-xl">
                  Approve Transactions
                </h3>
                <p className="text-gray-400">
                  When a transaction is initiated, it requires approval from the
                  designated number of signers. Once the required signatures are
                  collected, the transaction is securely executed on the
                  blockchain, ensuring maximum security and control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorks;
