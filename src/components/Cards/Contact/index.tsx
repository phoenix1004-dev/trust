import { SOCIAL_DATA } from "../../../types";

const ContactCard: React.FC<{ item: SOCIAL_DATA }> = ({ item }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-max p-[10px] bg-[#181820] rounded-[12px]">
        <a href="./#">
          <img className="w-[38px] h-[38px]" src={item.icon} alt="ios" />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
