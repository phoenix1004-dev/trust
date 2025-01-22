import { MENU_LINK } from "../../../types";
import { MenuLinkText } from "../../common/Text";

type MenuItemProps = {
  item: MENU_LINK;
};

const NavMenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <a href={item.link}>
      <MenuLinkText>{item.title}</MenuLinkText>
    </a>
  );
};

export default NavMenuItem;
