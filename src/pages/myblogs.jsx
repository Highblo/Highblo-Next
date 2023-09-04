import { DammyPortfolio } from "@/components/DammyPortfolio";
import { SectionTitle } from "@/components/SectionTitle";

const myblogs = () => {
  return (
    <section className="pt-6 lg:pt-16">
      <SectionTitle>Myblogs</SectionTitle>
      <p className="text-center my-4 md:my-7">随時追加する予定です</p>
      <div className="w-[90%] mx-auto p-2 space-y-4 md:space-y-0 md:flex md:flex-wrap md:justify-around md:items-center">
        <DammyPortfolio
          bgGradient="bg-gradient1"
          hoverBgGradient="hover:scale-100"
        />
        <DammyPortfolio
          bgGradient="bg-gradient2"
          hoverBgGradient="hover:scale-100"
        />
        <DammyPortfolio
          bgGradient="bg-gradient1"
          hoverBgGradient="hover:scale-100"
        />
        <DammyPortfolio
          bgGradient="bg-gradient2"
          hoverBgGradient="hover:scale-100"
        />
        <DammyPortfolio
          bgGradient="bg-gradient1"
          hoverBgGradient="hover:scale-100"
        />
        <DammyPortfolio
          bgGradient="bg-gradient2"
          hoverBgGradient="hover:scale-100"
        />
      </div>
    </section>
  );
};

export default myblogs;
