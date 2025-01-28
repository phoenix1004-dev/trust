import { linkedin, telegram, whatsApp, email } from "../assets/image";
import { MENU_LINK, SOCIAL_DATA } from "../types";

const MENU_LINKS: MENU_LINK[] = [
  { title: "Benifits", link: "./benifits" },
  { title: "Features", link: "./benifits" },
  { title: "Pricing", link: "./benifits" },
  { title: "Testimonials", link: "./benifits" },
  { title: "FAQ's", link: "./benifits" },
];

const SOCIAL_ITEMS: SOCIAL_DATA[] = [
  { icon: whatsApp, link: "" },
  { icon: telegram, link: "" },
  { icon: linkedin, link: "" },
  { icon: email, link: "" },
];

export { MENU_LINKS, SOCIAL_ITEMS };
