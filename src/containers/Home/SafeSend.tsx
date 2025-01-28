import { privateIcon, secure, lock } from "../../assets/image";
import { InitialAppearance } from "../../components/Animation";
import { HeaderText, NormalText } from "../../components/common/Text";

const HomeSafeSend = () => {
  return (
    <section className="w-full mt-8 px-4 bg-full-screen-shadow bg-no-repeat text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <InitialAppearance className="relative lg:w-1/2 text-left" time={2}>
            <HeaderText className="mb-6 white-text-shadow">
              What is SafeSend?
            </HeaderText>
            <NormalText className="mb-8">
              SafeSend is a revolutionary multisig wallet that provides enhanced
              security for your digital assets through multi-signature
              technology. With SafeSend, multiple parties must approve each
              transaction, significantly reducing the risk of unauthorized
              access or theft.
            </NormalText>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                  <img src={secure} alt="secure" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Secure</h3>
                  <p className="text-gray-400 text-sm">
                    Multi-layer protection
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white">
                  <img src={privateIcon} alt="private" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Private</h3>
                  <p className="text-gray-400 text-sm">Full user control</p>
                </div>
              </div>
            </div>
          </InitialAppearance>
          <InitialAppearance className="relative lg:w-1/2" time={2}>
            <img
              src={lock}
              alt="SafeSend Features"
              className="w-full max-w-md mx-auto"
            />
          </InitialAppearance>
        </div>
      </div>
    </section>
  );
};

export default HomeSafeSend;
