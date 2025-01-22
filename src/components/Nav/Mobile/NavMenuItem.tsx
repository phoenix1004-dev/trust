import { MENU_LINK } from "../../../types";
import { DropdownMenuLinkText } from "../../common/Text";

type MenuItemProps = {
  item: MENU_LINK;
};

const NavMenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <a href={item.link}>
      <DropdownMenuLinkText className="!text-white !p-0">
        {item.title}
      </DropdownMenuLinkText>
    </a>
  );
};

export default NavMenuItem;
