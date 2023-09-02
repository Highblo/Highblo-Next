import Typed from "typed.js";
import { useCallback, useEffect, useRef } from "react";

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

  return (
    <section className="p-6 md:text-center lg:pt-16">
      <div className=" space-y-4 sm:space-y-6">
        <h1 className="text-6xl stroke sm:text-7xl md:text-8xl">
          Hello
          <br />
          I'm Highblo
        </h1>
        <h2 className="text-2xl sm:text-3xl">
          I'm a{" "}
          <span
            className="text-gradient text-3xl font-bold sm:text-4xl md:text-5xl"
            ref={el}
          ></span>
        </h2>
      </div>
      <div className="mt-6 sm:mt-10 lg:w-[70%] lg:mx-auto">
        <p className="mb-8 md:mb-12 md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tempora
          enim eaque nobis omnis eum tempore, quibusdam suscipit! Nam sit
          voluptates fugit ducimus labore quo. Magni repudiandae eius velit
          sequi.
        </p>
        <div className="space-y-6 md:w-[80%] md:mx-auto">
          <Button text="text-white" bg="bg-gray-700" onClick={onClickOldSite}>
            Old site
          </Button>
          <Button text="text-gray-700" bg="bg-white" onClick={onClickCode}>
            Source Code
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
