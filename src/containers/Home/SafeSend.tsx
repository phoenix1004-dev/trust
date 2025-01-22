import { privateIcon, secure, lock } from "../../assets/image";

const HomeSafeSend = () => {
  return (
    <section className="w-full mt-8 px-4 bg-full-screen-shadow bg-no-repeat text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-white mb-6 white-text-shadow">
              What is SafeSend?
            </h2>
            <p className="text-gray-300 mb-8">
              SafeSend is a revolutionary multisig wallet that provides enhanced
              security for your digital assets through multi-signature
              technology. With SafeSend, multiple parties must approve each
              transaction, significantly reducing the risk of unauthorized
              access or theft.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <img src={privateIcon} alt="private" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Private</h3>
                  <p className="text-gray-400 text-sm">Full user control</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src={lock}
              alt="SafeSend Features"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSafeSend;
