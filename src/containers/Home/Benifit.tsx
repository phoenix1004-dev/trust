import BenifitCard from "../../components/Cards/Home/Benifit";
import { HeaderText } from "../../components/common/Text";
import { BENIFIT_ITEMS } from "../../constants/Items";
import { BENIFIT_DATA } from "../../types";

const HomeBenifits = () => {
  return (
    <section className="w-full mt-8 px-4 bg-full-screen-shadow bg-no-repeat text-center">
      <div className="mb-8 py-4">
        <HeaderText className="white-text-shadow mb-10">Benefits</HeaderText>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-4 text-white justify-items-center">
          {BENIFIT_ITEMS.map((item: BENIFIT_DATA, index: number) => (
            <BenifitCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBenifits;
