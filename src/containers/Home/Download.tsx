import {
  appStore,
  googleAppStore,
  homeDownload,
  privateIcon,
  secure,
  twoArrowws,
} from "../../assets/image";
import { NormalButton } from "../../components/common/Button";

const HomeDownload = () => {
  return (
    <section className="w-full py-16 px-4 relative bg-black z-[10]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 bg-black z-10">
            <img
              src={homeDownload}
              alt="Download App"
              className="w-full max-w-lg mx-auto"
            />
          </div>
          <div className="lg:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-white mb-6 white-text-shadow">
              Download Our Wallet
            </h2>
            <p className="text-gray-300 mb-8">
              Get started with SafeSend today. Download our secure wallet app
              and take control of your digital assets with confidence. Available
              for both iOS and Android devices.
            </p>
            <div className="flex flex-col md:flex-row gap-[20px]">
              <NormalButton className="px-[18px] py-[14px]">
                <div className="flex gap-[10px] items-center justify-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src={googleAppStore}
                    alt="google app store"
                  />
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[13px] leading-[10.4px]">Get It On</p>
                    <p className="text-[17px] font-semibold leading-[13.6px]">
                      Google Play
                    </p>
                  </div>
                </div>
              </NormalButton>
              <NormalButton className="px-[18px] py-[14px]">
                <div className="flex gap-[10px] items-center justify-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src={appStore}
                    alt="app store"
                  />
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[13px] leading-[10.4px]">
                      Download on the
                    </p>
                    <p className="text-[17px] font-semibold leading-[13.6px]">
                      App Store
                    </p>
                  </div>
                </div>
              </NormalButton>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                  <img src={secure} alt="secure" />
                </div>
                <span className="text-gray-300">Secure Storage</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                  <img src={privateIcon} alt="secure" />
                </div>
                <span className="text-gray-300">Multi-Signature Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
                  <img src={twoArrowws} className="w-4 h-4" alt="secure" />
                </div>
                <span className="text-gray-300">Cross-Chain Compatibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDownload;
