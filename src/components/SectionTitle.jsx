import { useInView } from "react-intersection-observer";

export const SectionTitle = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <h2
      className={`text-6xl stroke text-center mb-2 scroll-animation1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } sm:text-7xl md:text-8xl`}
      ref={ref}
    >
      {children}
    </h2>
  );
};
