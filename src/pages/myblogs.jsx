import { DammyCard } from "@/components/DammyCard";
import { ScrollAnimation } from "@/components/ScrollAnimation";
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
      <div className="w-[90%] mx-auto p-2 space-y-4 md:space-y-0 md:flex md:flex-wrap md:justify-around md:items-center">
        <DammyCard bgGradient="bg-gradient1" hover="hover:scale-100" />
        <DammyCard bgGradient="bg-gradient2" hover="hover:scale-100" />
        <DammyCard bgGradient="bg-gradient1" hover="hover:scale-100" />
        <DammyCard bgGradient="bg-gradient2" hover="hover:scale-100" />
        <DammyCard bgGradient="bg-gradient1" hover="hover:scale-100" />
        <DammyCard bgGradient="bg-gradient2" hover="hover:scale-100" />
      </div>
    </section>
  );
};

export default myblogs;
