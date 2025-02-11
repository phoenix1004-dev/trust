import { SOCIAL_ITEMS } from "../../constants/Links";
import { SOCIAL_DATA } from "../../types";
import ContactCard from "../Cards/Contact";
import { HeaderText, NormalText } from "../common/Text";

const Contact = () => {
  return (
    <section
      className="w-full py-8 px-4 text-center relative z-[10]"
      style={{
        background:
          "radial-gradient(27.274516120515756% 35.90163801120711% at 50% -2.7755575615628914e-14%,#131315 0%,rgba(0,0,0,1) 100%)",
      }}
    >
      <div
        className="w-full h-[1px] absolute top-0 left-0 right-0 overflow-visable z-1"
        style={{
          background:
            "radial-gradient(40% 50% at 50% 50%,#28282c 0%,rgb(0,0,0) 100%)",
        }}
      />
      <div className="max-w-7xl mx-auto gap-8 bg-custom-talk bg-center bg-cover bg-no-repeat">
        <div className="relative p-4">
          <div className="py-8 relative z-10">
            <HeaderText className="white-text-shadow">Let's Talk</HeaderText>
            <NormalText className="mt-4 mb-8">
              Begin your journey into the tomorrow of fintech today.
            </NormalText>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {SOCIAL_ITEMS.map((item: SOCIAL_DATA, index: number) => (
              <ContactCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
