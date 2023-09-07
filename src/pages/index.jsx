import { useCallback, useEffect, useRef } from "react";
import Typed from "typed.js";

import { Button } from "@/components/atom/Button";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Home = () => {
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
  
  const onClickOldSite = useCallback(() => {
    location.href = "https://haru-portfolio71.netlify.app/";
  }, []);

  const onClickCode = useCallback(() => {
    location.href = "https://github.com/Highblo/Highblo-Next";
  }, []);
  
  return (
    <section className="p-6 overflow-hidden md:text-center lg:pt-16">
      <div className="space-y-4 sm:space-y-6">
        <ScrollAnimation
          transition="scroll-animation1"
          before="opacity-0 translate-y-8"
          after="opacity-100 translate-y-0"
        >
          <h1 className="text-6xl stroke sm:text-7xl md:text-8xl">
            Hello
            <br />
            I'm Highblo
          </h1>
        </ScrollAnimation>
        <ScrollAnimation
          transition="scroll-animation2"
          before="opacity-0 -translate-x-8"
          after="opacity-100 translate-x-0"
        >
          <h2 className="text-2xl sm:text-3xl">
            I'm a{" "}
            <span
              className="text-gradient text-3xl font-bold sm:text-4xl md:text-5xl"
              ref={el}
            ></span>
          </h2>
        </ScrollAnimation>
      </div>
      <div className="mt-6 sm:mt-10 lg:w-[70%] lg:mx-auto">
        <ScrollAnimation
          transition="scroll-animation3"
          before="opacity-0 translate-x-8"
          after="opacity-100 translate-x-0"
        >
          <p className="mb-8 md:mb-12 md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tempora
            enim eaque nobis omnis eum tempore, quibusdam suscipit! Nam sit
            voluptates fugit ducimus labore quo. Magni repudiandae eius velit
            sequi.
          </p>
        </ScrollAnimation>
        <div className="space-y-6 md:w-[80%] md:mx-auto">
          <ScrollAnimation
            transition="scroll-animation5"
            before="opacity-0 translate-y-8"
            after="opacity-100 translate-y-0"
          >
            <Button
              text="text-white"
              bg="bg-gray-700"
              hover="hover:text-gray-700 hover:bg-white"
              onClick={onClickOldSite}
            >
              Old site
            </Button>
          </ScrollAnimation>
          <ScrollAnimation
            transition="scroll-animation6"
            before="opacity-0 translate-y-8"
            after="opacity-100 translate-y-0"
          >
            <Button
              text="text-gray-700"
              bg="bg-white"
              hover="hover:text-white hover:bg-gray-700"
              onClick={onClickCode}
            >
              Source Code
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Home;
