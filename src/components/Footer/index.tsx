import { favIcon } from "../../assets/image";
import { SOFTWARE_ITEMS } from "../../constants/Items";

const Footer = () => {
  return (
    <section className="w-full flex flex-col items-center justify-between py-14">
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-4xl font-extrabold mb-4 white-text-shadow text-left">
                Platform Support
              </h2>
              <p className="text-stone-300 text-left">
                Our wallet is available on iOS, Android, and Desktop, and
                supports all major coins and tokens.
              </p>
            </div>
            <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-4">
              {SOFTWARE_ITEMS.map((item: any, index: number) => (
                <img
                  key={index}
                  src={item}
                  alt={`software ${index}`}
                  className="w-[24%] md:w-[10%] max-w-[80px] mb-4"
                />
              ))}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g opacity="0.7">
                    <path
                      d="M0.447972 0.675781L9.79988 13.1802L0.388916 23.3467H2.50695L10.7462 14.4458L17.4033 23.3467H24.6111L14.733 10.139L23.4926 0.675781H21.3745L13.7866 8.87343L7.6557 0.675781H0.447972ZM3.56268 2.23593H6.87393L21.4959 21.7863H18.1846L3.56268 2.23593Z"
                      fill="#C7C7C7"
                    />
                  </g>
                </svg>
                <li>X (Twitter)</li>
              </a>
              <a
                href="https://www.reddit.com/user/Trustvault/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
                <li>Reddit</li>
              </a>
              <a
                href="https://www.quora.com/profile/Trustvault"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.738 18.701c-.831-1.635-1.805-3.287-3.708-3.287-.362 0-.727.061-1.059.209l-.646-1.289c.786-.678 2.058-1.214 3.693-1.214 2.544 0 3.851 1.229 4.888 2.792l1.47-4.861h1.729L16.092 21H14.27l.248-.823c-1.088 1.112-2.359 1.61-3.887 1.61-1.864 0-2.673-.903-2.673-2.174 0-1.301.757-2.063 2.042-2.063 1.079 0 1.783.406 2.292 1.151h.446zm-1.862 1.902c1.521 0 2.487-.69 3.092-1.826h-.438c-.665-.959-1.509-1.466-2.691-1.466-.895 0-1.419.486-1.419 1.326s.457 1.966 1.456 1.966zM21.935 0H2.065A2.065 2.065 0 0 0 0 2.065v19.87A2.065 2.065 0 0 0 2.065 24h19.87A2.065 2.065 0 0 0 24 21.935V2.065A2.065 2.065 0 0 0 21.935 0z"></path>
                </svg>
                <li>Quora</li>
              </a>
              <a
                href="https://www.instagram.com/trustvaultwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-1.38-.896-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                </svg>
                <li>Instagram</li>
              </a>
              <a
                href="https://www.youtube.com/@TrustVaultApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-2 hover:text-lime-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
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
