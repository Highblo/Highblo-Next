import { DammyCard } from "@/components/atom/DammyCard";
import { ScrollAnimation } from "@/components/atom/ScrollAnimation";
import { SectionTitle } from "@/components/atom/SectionTitle";

const myblogs = () => {
  return (
    <section className="overflow-hidden pt-6 lg:pt-16">
      <SectionTitle>Myblogs</SectionTitle>
      <ScrollAnimation
        transition="scroll-animation2"
        before="opacity-0 translate-x-8"
        after="opacity-100 translate-x-0"
      >
        <p className="text-center my-4 md:my-7">随時追加する予定です</p>
      </ScrollAnimation>
      <div className="w-[90%] mx-auto p-2 space-y-4 md:space-y-0 md:flex md:flex-wrap md:justify-around md:items-center lg:w-[85%]">
        <DammyCard
          bgGradient="bg-gradient1"
          hover="hover:scale-100"
          transition="scroll-animation3"
        />
        <DammyCard
          bgGradient="bg-gradient2"
          hover="hover:scale-100"
          transition="scroll-animation5"
        />
        <DammyCard
          bgGradient="bg-gradient1"
          hover="hover:scale-100"
          transition="scroll-animation6"
        />
        <DammyCard
          bgGradient="bg-gradient2"
          hover="hover:scale-100"
          transition="scroll-animation7"
        />
        <DammyCard
          bgGradient="bg-gradient1"
          hover="hover:scale-100"
          transition="scroll-animation8"
        />
        <DammyCard
          bgGradient="bg-gradient2"
          hover="hover:scale-100"
          transition="scroll-animation9"
        />
      </div>
    </section>
  );
};

export default myblogs;
