import { InitialAppearance } from "../../components/Animation";
import {
  CardSubText,
  CardTitleText,
  HeaderText,
} from "../../components/common/Text";

const HomeWorks = () => {
  const animation = {
    from: { top: 100, left: 0 },
    to: { top: 0, left: 0 },
    time: 1,
  };

  return (
    <section className="w-full mt-16 mb-12 bg-full-screen-shadow bg-no-repeat">
      <div className="max-w-6xl mx-auto text-white">
        <InitialAppearance className="relative text-center mb-10" time={1}>
          <HeaderText className="text-center mb-8 white-text-shadow">
            How it Works
          </HeaderText>
        </InitialAppearance>
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 space-y-6 lg:space-y-0">
          <InitialAppearance
            className="relative first-vector-card flex flex-col items-center w-full lg:w-[45%] px-4 mx-auto"
            from={animation.from}
            to={animation.to}
            time={animation.time}
          >
            <div className="relative mb-6 w-full flex justify-start h-full">
              <div className="bg-[#09090a] border border-solid border-[#18181b] rounded-3xl py-8 px-4 w-full min-h-[200px] relative z-10">
                <CardTitleText className="mb-2">Secure Setup</CardTitleText>
                <CardSubText>
                  Create your multisig wallet by selecting the number of
                  signatures required to approve a transaction. Invite trusted
                  parties to join the wallet, each with their own private key
                  securely stored on their device.
                </CardSubText>
              </div>
            </div>
          </InitialAppearance>
          <InitialAppearance
            className="relative second-vector-card flex flex-col items-center w-full lg:w-[45%] px-4 mx-auto"
            from={animation.from}
            to={animation.to}
            time={animation.time}
            delay={animation.time}
          >
            <div className="relative mb-6 w-full flex justify-start h-full">
              <div className="bg-[#09090a] border border-solid border-[#18181b] rounded-3xl py-8 px-4 w-full min-h-[200px] relative z-10">
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
          </InitialAppearance>
        </div>
      </div>
    </section>
  );
};

export default HomeWorks;
