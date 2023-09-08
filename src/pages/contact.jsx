import { Button } from "@/components/atom/Button";
import { FormLayout } from "@/components/atom/FormLayout";
import { SectionTitle } from "@/components/atom/SectionTitle";
import { ScrollAnimation } from "@/components/atom/ScrollAnimation";

const Contact = () => {
  return (
    <div className="overflow-hidden p-6 md:w-[85%] md:mx-auto lg:pt-16 xl:w-[780px]">
      <SectionTitle>Contact</SectionTitle>
      <ScrollAnimation
        transition="scroll-animation2"
        before="opacity-0 translate-x-8"
        after="opacity-100 translate-x-0"
      >
        <p className="md:mt-4 md:text-center">
          Webサイト・アプリケーション開発のご依頼、お伝えしたいことなどありましたらお気軽にお問い合わせ下さい。
        </p>
      </ScrollAnimation>
      <form className="space-y-5 mt-6 md:space-y-10 md:mt-12">
        <ScrollAnimation
          transition="scroll-animation3"
          before="opacity-0 translate-y-6"
          after="opacity-100 translate-y-0"
        >
          <FormLayout>
            <label htmlFor="name" className="w-[15%]">
              名前
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="名前を入力してください"
              className="w-[85%] p-2 rounded-md"
            />
          </FormLayout>
        </ScrollAnimation>
        <ScrollAnimation
          transition="scroll-animation5"
          before="opacity-0 translate-y-6"
          after="opacity-100 translate-y-0"
        >
          <FormLayout>
            <label htmlFor="email" className="w-[15%]">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="メールアドレスを入力してください"
              className="w-[85%] p-2 rounded-md"
            />
          </FormLayout>
        </ScrollAnimation>
        <ScrollAnimation
          transition="scroll-animation6"
          before="opacity-0 translate-y-6"
          after="opacity-100 translate-y-0"
        >
          <FormLayout>
            <label htmlFor="message" id="message" className="w-[15%]">
              内容
            </label>
            <textarea
              name="message"
              id="message"
              className="w-[85%] p-2 rounded-md"
            ></textarea>
          </FormLayout>
        </ScrollAnimation>
        <ScrollAnimation
          transition="scroll-animation7"
          before="opacity-0 translate-y-6"
          after="opacity-100 translate-y-0"
        >
          <Button
            text="text-gray-700"
            bg="bg-white"
            hover="hover:text-white hover:bg-gray-700"
          >
            送信
          </Button>
        </ScrollAnimation>
        <ScrollAnimation
          transition="scroll-animation8"
          before="opacity-0 translate-y-6"
          after="opacity-100 translate-y-0"
        >
          <p className="text-xs mb-1 text-center">
            バックエンド実装していないので実際に送りたい場合はこちらから↓
          </p>
          <a
            href="mailto:haruki._71@icloud.com"
            className="py-2 px-4 bg-gray-700 text-white rounded-lg text-center block"
          >
            メールフォームを起動する
          </a>
        </ScrollAnimation>
      </form>
    </div>
  );
};

export default Contact;
