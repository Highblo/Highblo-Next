import Typed from "typed.js";
import { useCallback, useEffect, useRef } from "react";

import { Button } from "@/components/Button";

const Home = () => {
  const onClickOldSite = useCallback(() => {
    location.href = "https://haru-portfolio71.netlify.app/";
  }, []);

  const onClickContact = useCallback(() => {
    location.href = "https://github.com/Highblo/Highblo-Next";
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["fullstack developer", "frontend engineer", "freedom lover"],
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
    <section className="w-[92%] mx-auto mt-10 px-2">
      <div className=" space-y-6">
        <h1 className="text-6xl stroke text-transparent">
          Hello
          <br />
          I'm Highblo
        </h1>
        <h2 className="text-2xl">
          I'm a <span className="text-red-400 text-3xl" ref={el}></span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tempora
          enim eaque nobis omnis eum tempore, quibusdam suscipit! Nam sit
          voluptates fugit ducimus labore quo. Magni repudiandae eius velit
          sequi.
        </p>
      </div>
      <div className="space-y-4 mt-10">
        <Button text="text-white" bg="bg-gray-700" onClick={onClickOldSite}>
          Old site
        </Button>
        <Button text="text-gray-700" bg="bg-white" onClick={onClickContact}>
          Source Code
        </Button>
      </div>
    </section>
  );
};

export default Home;
