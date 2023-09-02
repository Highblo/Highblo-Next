import { DammyPortfolio } from "@/components/DammyPortfolio";
import { SectionTitle } from "@/components/SectionTitle";

const Portfolio = () => {
  return (
    <section className="mt-3">
      <SectionTitle>Portfolio</SectionTitle>
      <p className="text-center mb-1">随時追加する予定です</p>
      <div className="w-[80%] mx-auto h-[56vh] overflow-y-scroll p-2 space-y-4 md:space-y-0 md:flex md:flex-wrap md:justify-around md:items-center">
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

export default Portfolio;
