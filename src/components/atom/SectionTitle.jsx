import { ScrollAnimation } from "./ScrollAnimation";

export const SectionTitle = ({ children }) => {
  return (
    <ScrollAnimation
      transition="scroll-animation1"
      before="opacity-0 translate-y-8"
      after="opacity-100 translate-y-0"
    >
      <h2 className="text-6xl stroke text-center mb-2 sm:text-7xl md:text-8xl">
        {children}
      </h2>
    </ScrollAnimation>
  );
};
