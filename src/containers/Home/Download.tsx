import { appStore, googleAppStore, homeDownload } from "../../assets/image";
import { NormalButton } from "../../components/common/Button";

const HomeDownload = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
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
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="text-blue-500 w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                </svg>
                <span className="text-gray-300">Secure Storage</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  className="text-purple-500 w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path>
                </svg>
                <span className="text-gray-300">Multi-Signature Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="text-pink-500 w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path>
                </svg>
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
