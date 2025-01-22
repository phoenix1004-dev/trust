import FeatureCard from "../../components/Cards/Home/Feature";

const HomeFeatures = () => {
  return (
    <section className="w-full px-4 text-gray-800 mb-16">
      <div className="text-center mb-8 py-4">
        <h1 className="text-4xl font-extrabold white-text-shadow">
          Key Features
        </h1>
      </div>
      <section className="w-full mb-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </section>
    </section>
  );
};

export default HomeFeatures;
