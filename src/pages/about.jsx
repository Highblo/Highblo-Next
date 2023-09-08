import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { favoriteSkills, skills } from "@/datas/mySkillsDatas";
import { SectionTitle } from "@/components/atom/SectionTitle";
import { ScrollAnimation } from "@/components/atom/ScrollAnimation";
import { Skill } from "@/components/molecules/Skill";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="overflow-hidden pt-6 px-6 lg:pt-16">
      <SectionTitle>About Me</SectionTitle>
      <div className="md:flex md:justify-center md:items-center md:my-14">
        <ScrollAnimation
          transition="scroll-animation2"
          before="opacity-0 -translate-x-8"
          after="opacity-100 translate-x-0"
        >
          <div className="w-[130px] h-[130px] mx-auto my-4 bg-tamaki rounded-full md:mx-6 md:w-[200px] md:h-[200px]"></div>
        </ScrollAnimation>
        <ScrollAnimation
          transition="scroll-animation3"
          before="opacity-0 translate-x-8"
          after="opacity-100 translate-x-0"
        >
          <p className="sm:text-lg sm:text-center md:text-start">
            1998年11月9日生まれの24歳
            <br />
            兵庫県姫路市出身
            <br />
            趣味は映画鑑賞でSF系の洋画が好み
            <br />
            ニックネームの由来は23歳の若さで高血圧と診断されたショックからつけた
            <br />
            現在は都内でWebエンジニアとして活動中
            <br />
            javascriptが好きでReactやNext.js、Node.jsを学んでいる
            <br />
            他の言語にも手を出したい今日この頃
            <br />
            とりあえずLaravelの響きがかっこいいからPHPかな
            <br />
            目標は自分のサービスを開発して収益化すること
          </p>
        </ScrollAnimation>
      </div>
      <div className="mt-10 space-y-8 mb-6 lg:w-[80%] lg:mx-auto lg:max-w-[1100px]">
        <ScrollAnimation
          transition="scroll-animation4"
          before="opacity-0 translate-y-6"
          after="opacity-100 translate-y-0"
        >
          <h3 className="text-center text-4xl stroke md:text-6xl">myskills</h3>
        </ScrollAnimation>
        <div className="space-y-6">
          {favoriteSkills.map(({ path, value, text }) => (
            <ScrollAnimation
              transition="scroll-animation1"
              before="opacity-0 translate-x-8"
              after="opacity-100 translate-x-0"
              key={path}
            >
              <Skill imagePath={path} value={value} text={text} />
            </ScrollAnimation>
          ))}
        </div>
        <ul className="flex flex-wrap">
          {skills.map(({ path, text }) => (
            <li
              className={`scroll-animation1 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              } w-1/2 flex items-center gap-2 py-4 md:text-lg`}
              key={path}
              ref={ref}
            >
              <div className="h-auto">
                <Image
                  src={`/images/${path}`}
                  alt="アイコン画像"
                  width={20}
                  height={20}
                />
              </div>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
