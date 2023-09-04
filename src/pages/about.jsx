import { SectionTitle } from "@/components/SectionTitle";
import { Skill } from "@/components/Skill";
import { favoriteSkills, skills } from "@/components/mySkillsData";

const About = () => {
  return (
    <section className="pt-6 px-6 lg:pt-16">
      <SectionTitle>About Me</SectionTitle>
      <div className="md:flex md:justify-center md:items-center md:my-14">
        <div className="w-[130px] h-[130px] mx-auto my-4 bg-tamaki rounded-full md:mx-6 md:w-[200px] md:h-[200px]"></div>
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
      </div>
      <div className="mt-10 space-y-5 mb-6 lg:w-[80%] lg:mx-auto lg:max-w-[1100px]">
        <h3 className="text-center text-4xl stroke md:text-6xl">myskills</h3>
        <div className="space-y-4">
          {favoriteSkills.map(({ path, value, text }) => (
            <Skill imagePath={path} value={value} text={text} />
          ))}
        </div>
        <ul className="flex flex-wrap">
          {skills.map(({ path, text }) => (
            <li
              className="w-1/2 flex items-center gap-1 py-2 md:text-lg"
              key={path}
            >
              <img
                src={`/images/${path}`}
                alt="アイコン画像"
                className="w-[20px]"
              />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
