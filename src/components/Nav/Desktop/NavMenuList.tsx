import { MENU_LINKS } from "../../../constants/Links";
import { MENU_LINK } from "../../../types";
import NavMenuItem from "./NavMenuItem";

const NavMenuList = () => {
  return (
    <>
      {MENU_LINKS.map((item: MENU_LINK, index: number) => (
        <NavMenuItem key={index} item={item} />
      ))}
    </>
  );
};

export default NavMenuList;
