import { blueBlur } from "../../assets/image";

const GetStarted = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join TrustVault today and experience the future of digital asset
          management
        </p>
        <div className="relative">
          <img
            src={blueBlur}
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2"
            alt="Button Blur"
          />
          <button className="relative z-10 bg-gradient-to-t from-neutral-950 to-gray-800 border-2 border-indigo-500 text-white py-4 px-8 rounded-full hover:bg-blue-600 transition text-lg font-bold">
            Create Your Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
