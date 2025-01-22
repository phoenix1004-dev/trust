import FAQCard from "../../components/Cards/Home/FAQ";

const HomeFAQs = () => {
  return (
    <section className="w-full px-4 py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-white relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to know about TrustVault
          </p>
        </div>
        <div className="space-y-4">
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </div>
      </div>
    </section>
  );
};

export default HomeFAQs;
