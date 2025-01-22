import { SOCIAL_ITEMS } from "../../constants/Items";
import ContactCard from "../Cards/Contact";
import { HeaderText, NormalText } from "../common/Text";

const Contact = () => {
  return (
    <section className="w-full py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto gap-8 bg-custom-talk bg-center bg-cover bg-no-repeat">
        <div className="relative p-4">
          <div className="py-8 relative z-10">
            <HeaderText className="white-text-shadow">Let's Talk</HeaderText>
            <NormalText className="mt-4 mb-8">
              Begin your journey into the tomorrow of fintech today.
            </NormalText>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {SOCIAL_ITEMS.map((item: any, index: number) => (
              <ContactCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
