import {
  algorand,
  bitcoin,
  buy,
  cardano,
  chainlink,
  custody,
  dodge,
  eos,
  etherium,
  futureDashboard,
  futureMultisig,
  futurePortfolio,
  futureSecurity,
  futureTransaction,
  futureWidget,
  key,
  kusama,
  litecoin,
  lock1,
  matic,
  near,
  polkadot,
  security,
  shib,
  solana,
  support1,
  support2,
  support3,
  support4,
  technology,
  tether,
  tron,
  uniswap,
  usdc,
  wallet1,
  wallet2,
  xrp,
} from "../assets/image";
import {
  BENIFIT_DATA,
  COIN_DATA,
  FAQ_DATA,
  FEATURE_DATA,
  FUTURE_DATA,
  SUPPORT_DATA,
  WALLET_DATA,
} from "../types";

const FEATURE_ITEMS: FEATURE_DATA[] = [
  {
    icon: technology,
    title: "Multi-Signature Technology",
    sub: "An additional layer of security",
    desc: "Require multiple signatures for transactions, ensuring enhanced protection.",
  },
  {
    icon: custody,
    title: "Self-Custody",
    sub: "Your keys, your crypto",
    desc: "Store your crypto securely, with full control over your private keys.",
  },
  {
    icon: buy,
    title: "Buy, Swap, Send and Store",
    sub: "Easily manage your crypto portfolio",
    desc: "Purchase, exchange, and transfer your cryptocurrencies, all within the app.",
  },
];

const COIN_ITEMS: COIN_DATA[] = [
  { icon: algorand, title: "Algorand" },
  { icon: bitcoin, title: "Bitcoin" },
  { icon: cardano, title: "Cardano" },
  { icon: chainlink, title: "ChainLink" },
  { icon: dodge, title: "Dodge" },
  { icon: eos, title: "EOS" },
  { icon: etherium, title: "Etherium" },
  { icon: kusama, title: "Kusama" },
  { icon: litecoin, title: "LiteCoin" },
  { icon: matic, title: "Matic" },
  { icon: near, title: "Near" },
  { icon: polkadot, title: "Polkadot" },
  { icon: shib, title: "Shib" },
  { icon: solana, title: "Solana" },
  { icon: tether, title: "Tether" },
  { icon: tron, title: "Tron" },
  { icon: uniswap, title: "Uniswap" },
  { icon: usdc, title: "USDC" },
  { icon: xrp, title: "XRP" },
];

const SUPPORT_ITEMS: SUPPORT_DATA[] = [
  {
    img: support1,
    title: "Supported cryptocurrencies",
    sub: "TOP - 30 Coin Market Cap",
  },
  {
    img: support2,
    title: "Supported token standards",
    sub: "BNB, ERC-20, TRC-10, TRC-20, SPL, ALGO, EOS",
  },
  {
    img: support3,
    title: "Supported NFTs Protocols",
    sub: "ERC-721, ERC-1155, SPL, JETTONS",
  },
  {
    img: support4,
    title: "Staking Coming Soon",
    sub: "TRX, SOL, AVAX, BNB, KSM, DOT",
  },
];

const BENIFIT_ITEMS: BENIFIT_DATA[] = [
  {
    img: security,
    title: "Enhanced Security",
    sub: "Protect your assets with multisig protection",
    desc: "Mitigate the risk of unauthorized transactions and ensure secure storage.",
  },
  {
    img: lock1,
    title: "Collaborative Management",
    sub: "Manage crypto with others, securely",
    desc: "Multisig enables shared management of crypto assets, with built-in security.",
  },
  {
    img: key,
    title: "Flexibility",
    sub: "Customize your multisig settings",
    desc: "Choose the number of signatures required and assign roles for tailored security",
  },
];

const FUTURE_ITEMS: FUTURE_DATA[] = [
  {
    img: futureDashboard,
    title: "Personalised dashboard",
    sub: "Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.",
  },
  {
    img: futureMultisig,
    title: "Enhanced with Multisig",
    sub: "Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.",
  },
  {
    img: futureTransaction,
    title: "Seamless Transactions",
    sub: "Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.",
  },
  {
    img: futureSecurity,
    title: "Advanced Security",
    sub: "Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.",
  },
  {
    img: futureWidget,
    title: "Custom Widgets",
    sub: "Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.",
  },
  {
    img: futurePortfolio,
    title: "Comprehensive Portfolio",
    sub: "Our multisig crypto wallet requires multiple private keys for each transaction. In a 2-of-3 setup, two out of three keys must approve before the transaction is executed, ensuring strong protection for your assets.",
  },
];

const WALLET_ITEMS: WALLET_DATA[] = [
  {
    img: wallet1,
    title: "Enhanced Security and Peace of Mind",
    sub: "Our multisig wallet ensures that your digital assets are protected by requiring multiple approvals for every transaction. This reduces the risk of unauthorized access and provides you with the confidence that your funds are secure, even if one key is compromised.",
  },
  {
    img: wallet2,
    title: "Full Control and Flexibility",
    sub: "With our wallet, you maintain full control over your assets. The ability to customize the number of required signers gives you the flexibility to tailor security to your specific needs, whether you're managing personal funds, corporate assets, or a joint account.",
  },
];

const FAQ_ITEMS: FAQ_DATA[] = [
  {
    qu: "What is a multisig crypto wallet?",
    an: "A multisig (multi-signature) crypto wallet is a digital wallet that requires multiple private keys to authorize a transaction. This enhances security by ensuring that more than one person or device must approve a transaction before it is executed. For instance, in a 2-of-3 multisig wallet, two out of three designated private keys must approve a transaction.",
  },
  {
    qu: "How does a multisig wallet enhance security?",
    an: "A multisig wallet enhances security by requiring multiple approvals before a transaction can proceed. This reduces the risk of theft, as one compromised key is not enough to authorize a transaction.",
  },
  {
    qu: "What does it mean that the wallet stores secret keys on the device's keychain?",
    an: "Storing secret keys on the device's keychain provides an additional layer of security by keeping keys secure and accessible only to the wallet application.",
  },
  {
    qu: "What are the different configurations of a multisig wallet?",
    an: "Multisig wallets can be configured in various ways, such as 2-of-3, 3-of-5, etc., meaning different numbers of keys are needed for transaction approval.",
  },
  {
    qu: "How does the keychain storage enhance security in a multisig wallet?",
    an: "Keychain storage enhances security by securing keys on the device itself, making them harder to access unauthorizedly.",
  },
  {
    qu: "What happens if one of the keys in a multisig wallet is lost, especially with keychain storage?",
    an: "If a key is lost, the wallet's multisig configuration may allow transactions with the remaining keys, depending on its setup.",
  },
  {
    qu: "Are multisig wallets compatible with all cryptocurrencies?",
    an: "Not all cryptocurrencies support multisig wallets; compatibility depends on the blockchain technology and wallet provider.",
  },
  {
    qu: "How do transaction approvals work in a multisig wallet with keychain-stored keys?",
    an: "In a multisig wallet with keychain-stored keys, each transaction requires approval from a set number of keys, which are securely stored in the device's keychain.",
  },
];

export {
  FAQ_ITEMS,
  WALLET_ITEMS,
  FUTURE_ITEMS,
  BENIFIT_ITEMS,
  SUPPORT_ITEMS,
  FEATURE_ITEMS,
  COIN_ITEMS,
};
