type MENU_LINK = {
  title: string;
  link: string;
};

type FEATURE_DATA = {
  icon: any;
  title: string;
  sub: string;
  desc: string;
};

type COIN_DATA = {
  icon: any;
  title: string;
};

type SUPPORT_DATA = {
  img: any;
  title: string;
  sub: string;
};

type BENIFIT_DATA = {
  img: any;
  title: string;
  sub: string;
  desc: string;
};

type FUTURE_DATA = {
  img: any;
  title: string;
  sub: string;
};

type WALLET_DATA = {
  img: any;
  title: string;
  sub: string;
};

type FAQ_DATA = {
  qu: string;
  an: string;
};

type POINTER = {
  top: number;
  left: number;
};

type SOCIAL_DATA = {
  icon: any;
  link: string;
};

export type {
  SOCIAL_DATA,
  POINTER,
  FAQ_DATA,
  WALLET_DATA,
  FUTURE_DATA,
  BENIFIT_DATA,
  SUPPORT_DATA,
  MENU_LINK,
  FEATURE_DATA,
  COIN_DATA,
};
