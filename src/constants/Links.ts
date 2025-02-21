import { linkedin, telegram, whatsApp, email } from "../assets/image";
import { MENU_LINK, SOCIAL_DATA } from "../types";

const MENU_LINKS: MENU_LINK[] = [
  { title: "Features", link: "./#features" },
  { title: "SafeSend", link: "./safesend" },
  { title: "Support", link: "./#support" },
  { title: "Benefits", link: "./#benefits" },
  { title: "Wallets", link: "./#wallets" },
  { title: "FAQ's", link: "./#faq" },
];

const SOCIAL_ITEMS: SOCIAL_DATA[] = [
  { icon: whatsApp, link: "" },
  { icon: telegram, link: "" },
  { icon: linkedin, link: "" },
  { icon: email, link: "" },
];

export { MENU_LINKS, SOCIAL_ITEMS };
