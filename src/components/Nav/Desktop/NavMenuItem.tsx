import { MENU_LINK } from "../../../types";
import { MenuLinkText } from "../../common/Text";

type MenuItemProps = {
  item: MENU_LINK;
};

const NavMenuItem: React.FC<MenuItemProps> = ({ item }) => {
  // const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   if (item.link.startsWith("./#")) {
  //     e.preventDefault();
  //     const targetId = item.link.replace("./#", "");
  //     if (window.location.pathname !== "/") {
  //       window.location.href = "/";
  //       localStorage.setItem("scrollTo", targetId);
  //     } else {
  //       const element = document.getElementById(targetId);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }
  //     }
  //   }
  // };

  return (
    <a href={item.link}>
      <MenuLinkText>{item.title}</MenuLinkText>
    </a>
  );
};

export default NavMenuItem;
