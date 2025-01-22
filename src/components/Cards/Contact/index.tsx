import { whatsApp } from "../../../assets/image";

const ContactCard = () => {
  return (
    <div className="flex justify-center items-center transform hover:scale-105 transition-transform duration-300">
      <img
        src={whatsApp}
        alt="WhatsApp"
        className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
      />
    </div>
  );
};

export default ContactCard;
