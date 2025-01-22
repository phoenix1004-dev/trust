import { security } from "../../../assets/image";

const BenifitCard = () => {
  return (
    <div className="flex flex-col items-center text-center min-h-64 h-full px-4">
      <div>
        <img src={security} alt="Feature 1" className="mb-7" />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Enhanced Security</h2>
        <h4 className="text-base font-light mb-5 w-full sm:w-48 mx-auto">
          Protect your assets with multisig protection
        </h4>
        <p className="text-sm text-stone-300 w-full sm:w-72 mx-auto flex-grow">
          Mitigate the risk of unauthorized transactions and ensure secure
          storage.
        </p>
      </div>
    </div>
  );
};

export default BenifitCard;
