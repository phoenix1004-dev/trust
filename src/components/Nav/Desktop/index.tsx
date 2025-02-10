import { AnimationButton } from "../../Animation";
import { FavIcon } from "../../common/Image";
import NavMenuList from "./NavMenuList";

const DesktopNav = () => {
  return (
    <div
      className="w-screen px-[60px] py-[24px] hidden lg:block border-b border-solid border-[#1d1d20] justify-items-center"
      style={{
        transform: "translateZ(0)",
      }}
    >
      <div className="w-full max-w-[1320px] relative flex items-center justify-center">
        <FavIcon className="absolute left-0" />
        <div className="flex">
          <NavMenuList />
        </div>
        <AnimationButton className="absolute right-0">
          Sign Up Now
        </AnimationButton>
      </div>
    </div>
  );
};

export default DesktopNav;
