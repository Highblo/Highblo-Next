import { SectionTitle } from "@/components/SectionTitle";

const About = () => {
  return (
    <section className="pt-6 lg:pt-16">
      <SectionTitle>About Me</SectionTitle>
      <div className="md:flex md:justify-center md:items-center md:h-[50vh]">
        <div className="w-[130px] h-[130px] mx-auto my-4 bg-tamaki rounded-full md:mx-6 md:w-[200px] md:h-[200px]"></div>
        <p className="px-6 sm:text-lg sm:text-center md:text-start">
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
    </section>
  );
};

export default About;
