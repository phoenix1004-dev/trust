import { favIcon, instagram, quora, xcom, youtube } from "../../assets/image";

const Footer = () => {
  return (
    <section className="w-full flex flex-col items-center justify-between py-14">
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-full mb-8 md:mb-0">
              <h2 className="text-4xl font-extrabold mb-4 white-text-shadow text-left">
                Platform Support
              </h2>
              <p className="text-[#94969d] text-left">
                Our wallet is available on iOS, Android, and Desktop, and
                supports all major coins and tokens.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-4 px-4  text-center">
        <footer className="flex flex-col md:flex-row justify-between items-start text-left text-white py-6 rounded-lg">
          <div className="md:w-1/2 mb-4 md:mb-0 text-stone-300 mr-16">
            <img src={favIcon} alt="Trust Logo" />
            <p className="mb-3 mt-3 max-w-md">
              Copyright 2024 Trust Vault Holdings. All rights reserved.
            </p>
            <p className="mb-3 mt-3">Email: info@trustvault.app</p>
            <p className="max-w-lg mb-3 mt-3 footer-info-text text-sm">
              The information provided on this website is for informational
              purposes only and should not be considered as financial or
              investment advice. Cryptocurrency transactions carry inherent
              risks, including the potential loss of funds. While we employ
              advanced security measures, such as our SafeSend feature, to
              protect your assets, we cannot guarantee the absolute security of
              your funds. Always ensure that you are using the correct wallet
              addresses and follow best practices for securing your private
              keys. By using our services, you agree to our terms and conditions
              and acknowledge that you are responsible for any transactions made
              through our platform.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-row justify-between gap-x-2 footer-right-section">
            <ul className="flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300">
              <li className="mb-2 font-bold text-white">TRUSTVAULT</li>
              <a href="/">
                <li className="mb-2 hover:text-lime-400 transition-colors">
                  Home
                </li>
              </a>
              <a href="/about">
                <li className="mb-2 hover:text-lime-400 transition-colors">
                  About us
                </li>
              </a>
              <a href="/safesend">
                <li className="mb-2 hover:text-lime-400 transition-colors">
                  SafeSend
                </li>
              </a>
              <a href="/features">
                <li className="mb-2 hover:text-lime-400 transition-colors">
                  Features
                </li>
              </a>
              <a href="/privacypolicy">
                <li className="mb-2 hover:text-lime-400 transition-colors">
                  Privacy Policy
                </li>
              </a>
              <a href="/terms">
                <li className="mb-2 hover:text-lime-400 transition-colors">
                  Terms and Conditions
                </li>
              </a>
            </ul>
            <ul className="flex-1 flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300 mr-4 lg:ml-[30px]">
              <li className="mb-2 font-bold text-white">DISCOVER</li>
              <div className="flex items-center mb-2">
                <span className="mr-2">•</span>
                <a href="/learn">
                  <p className="hover:text-lime-400 transition-colors">
                    Learn &amp; Explore
                  </p>
                </a>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">•</span>
                <a href="/blockchain101">
                  <p className="hover:text-lime-400 transition-colors">
                    Blockchain &amp; Crypto 101
                  </p>
                </a>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">•</span>
                <a href="/faq">
                  <p className="hover:text-lime-400 transition-colors">FAQ</p>
                </a>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">•</span>
                <a
                  href="https://x.com/trustvaultapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="hover:text-lime-400 transition-colors">
                    Stay Connected
                  </p>
                </a>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">•</span>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">
                  Getting Started Guide
                </p>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">•</span>
                <p className="hover:text-lime-400 transition-colors cursor-pointer">
                  Tutorials
                </p>
              </div>
            </ul>
            <ul className="md:w-1/4 flex flex-col justify-between mb-4 md:mb-0 space-y-5 text-stone-300">
              <li className="mb-2 font-bold text-white">FOLLOW US</li>
              <a
                href="https://x.com/trustvaultapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <img className="w-[24px] h-[24px]" src={xcom} alt="xcom" />
                <li>X (Twitter)</li>
              </a>
              <a
                href="https://www.reddit.com/user/Trustvault/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={youtube}
                  alt="youtube"
                />
                <li>Reddit</li>
              </a>
              <a
                href="https://www.quora.com/profile/Trustvault"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <img className="w-[24px] h-[24px]" src={quora} alt="quora" />
                <li>Quora</li>
              </a>
              <a
                href="https://www.instagram.com/trustvaultwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={instagram}
                  alt="istagram"
                />
                <li>Instagram</li>
              </a>
              <a
                href="https://www.youtube.com/@TrustVaultApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={youtube}
                  alt="youtube"
                />
                <li>YouTube</li>
              </a>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
