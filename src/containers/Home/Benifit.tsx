import BenifitCard from "../../components/Cards/Home/Benifit";

const HomeBenifits = () => {
  return (
    <section className="w-full mt-8 px-4 bg-full-screen-shadow bg-no-repeat text-center">
      <div className="mb-8 py-4">
        <h1 className="text-5xl white-text-shadow mb-10 text-center font-extrabold">
          Benefits
        </h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-4 text-white justify-items-center">
          <BenifitCard />
          <BenifitCard />
          <BenifitCard />
        </div>
      </div>
    </section>
  );
};

export default HomeBenifits;
