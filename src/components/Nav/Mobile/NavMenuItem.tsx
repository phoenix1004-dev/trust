import { MENU_LINK } from "../../../types";
import { DropdownMenuLinkText } from "../../common/Text";

type MenuItemProps = {
  item: MENU_LINK;
};

const NavMenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.link.startsWith("./#")) {
      e.preventDefault();
      const targetId = item.link.replace("./#", "");
      if (window.location.pathname !== "/") {
        window.location.href = "/";
        localStorage.setItem("scrollTo", targetId);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <a href={item.link} onClick={handleClick}>
      <DropdownMenuLinkText className="!text-white !p-0">
        {item.title}
      </DropdownMenuLinkText>
    </a>
  );
};

export default NavMenuItem;
