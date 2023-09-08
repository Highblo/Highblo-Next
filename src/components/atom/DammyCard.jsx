import { ScrollAnimation } from "./ScrollAnimation";

export const DammyCard = ({ bgGradient, hover, transition }) => {
  return (
    <ScrollAnimation
      transition={transition}
      before="opacity-0 translate-y-8"
      after="opacity-100 translate-y-0"
      css="md:w-[32%] md:h-[200px]"
    >
      <div
        className={`${bgGradient} w-full h-full grid place-items-center scale-90 p-5 text-xl rounded-xl text-white cursor-pointer transition-all duration-300 ${hover}  md:text-2xl`}
      >
        Coming Soon
      </div>
    </ScrollAnimation>
  );
};
