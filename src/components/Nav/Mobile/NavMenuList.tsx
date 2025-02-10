import { MENU_LINKS } from "../../../constants/Links";
import { MENU_LINK } from "../../../types";
import { AnimationButton } from "../../Animation";
import NavMenuItem from "./NavMenuItem";

const NavMenuList = () => {
  return (
    <>
      {MENU_LINKS.map((item: MENU_LINK, index: number) => (
        <NavMenuItem key={index} item={item} />
      ))}
      <AnimationButton className="w-[180px]">Sign Up Now</AnimationButton>
    </>
  );
};

export default NavMenuList;
