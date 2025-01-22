import { MENU_LINKS } from "../../../constants/Links";
import { MENU_LINK } from "../../../types";
import { NormalButton } from "../../common/Button";
import NavMenuItem from "./NavMenuItem";

const NavMenuList = () => {
  return (
    <>
      {MENU_LINKS.map((item: MENU_LINK, index: number) => (
        <NavMenuItem key={index} item={item} />
      ))}
      <NormalButton className="w-[180px]">Sign Up Now</NormalButton>
    </>
  );
};

export default NavMenuList;
