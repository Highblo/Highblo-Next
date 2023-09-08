import { useInView } from "react-intersection-observer";

export const ScrollAnimation = ({ children, transition, before, after, key }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  
  return (
    <div key={key} ref={ref} className={`${transition} ${inView ? after : before}`}>
      {children}
    </div>
  );
};
