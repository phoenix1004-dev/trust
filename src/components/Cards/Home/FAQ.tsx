const FAQCard = () => {
  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20">
      <button className="w-full px-8 py-6 text-left flex justify-between items-center group">
        <span className="text-lg font-medium pr-8 group-hover:text-lime-400 transition-colors">
          What is a multisig crypto wallet?
        </span>
        <span className="transform transition-transform duration-300 text-lime-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0">
        <div className="px-8 pb-6 text-gray-300 leading-relaxed">
          A multisig (multi-signature) crypto wallet is a digital wallet that
          requires multiple private keys to authorize a transaction. This
          enhances security by ensuring that more than one person or device must
          approve a transaction before it is executed. For instance, in a 2-of-3
          multisig wallet, two out of three designated private keys must approve
          a transaction.
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
