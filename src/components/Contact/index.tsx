import ContactCard from "../Cards/Contact";

const Contact = () => {
  return (
    <section className="w-full py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto gap-8 bg-custom-talk bg-center bg-cover bg-no-repeat">
        <div className="relative p-4">
          <div className="py-8 relative z-10">
            <h2 className="text-5xl font-extrabold white-text-shadow">
              Let's Talk
            </h2>
            <p className="text-stone-300 text-xl mt-4 mb-8">
              Begin your journey into the tomorrow of fintech today.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
