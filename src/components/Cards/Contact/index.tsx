const ContactCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="w-full justify-items-center">
      <div className="w-max p-[10px] bg-[#181820] rounded-[12px]">
        <img className="w-[38px] h-[38px]" src={item} alt="ios" />
      </div>
    </div>
  );
};

export default ContactCard;
