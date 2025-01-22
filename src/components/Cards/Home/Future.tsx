import { futureDashboard } from "../../../assets/image";

const FutureCard = () => {
  return (
    <div className="relative px-6 py-10 border rounded-3xl shadow-md mb-6">
      <img
        src={futureDashboard}
        className="w-15 py-4 ml-auto"
        alt="Feature 1"
      />
      <h2 className="text-2xl sm:text-xl font-semibold mb-2">
        Personalised dashboard
      </h2>
      <p className="mt-2 text-sm sm:text-xs md:text-sm text-stone-300 font-light">
        Our multisig crypto wallet requires multiple private keys for each
        transaction. In a 2-of-3 setup, two out of three keys must approve
        before the transaction is executed, ensuring strong protection for your
        assets.
      </p>
    </div>
  );
};

export default FutureCard;
