import Typed from "typed.js";
import { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/Button";

const Home = () => {
  const onClickOldSite = useCallback(() => {
    location.href = "https://haru-portfolio71.netlify.app/";
  }, []);

  const onClickCode = useCallback(() => {
    location.href = "https://github.com/Highblo/Highblo-Next";
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["fullstack engineer", "frontend engineer", "freedom lover"],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="p-6 overflow-hidden md:text-center lg:pt-16">
      <div className="space-y-4 sm:space-y-6">
        <h1
          className={`text-6xl stroke scroll-animation1 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } sm:text-7xl md:text-8xl`}
          ref={ref}
        >
          Hello
          <br />
          I'm Highblo
        </h1>
        <h2
          className={`text-2xl scroll-animation2 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          } sm:text-3xl`}
          ref={ref}
        >
          I'm a{" "}
          <span
            className="text-gradient text-3xl font-bold sm:text-4xl md:text-5xl"
            ref={el}
          ></span>
        </h2>
      </div>
      <div className="mt-6 sm:mt-10 lg:w-[70%] lg:mx-auto">
        <p
          className={`mb-8 scroll-animation3 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          } md:mb-12 md:text-lg`}
          ref={ref}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tempora
          enim eaque nobis omnis eum tempore, quibusdam suscipit! Nam sit
          voluptates fugit ducimus labore quo. Magni repudiandae eius velit
          sequi.
        </p>
        <div className="space-y-6 md:w-[80%] md:mx-auto">
          <div
            ref={ref}
            className={`scroll-animation5 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button text="text-white" bg="bg-gray-700" onClick={onClickOldSite}>
              Old site
            </Button>
          </div>
          <div
            ref={ref}
            className={`scroll-animation6 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button text="text-gray-700" bg="bg-white" onClick={onClickCode}>
              Source Code
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
