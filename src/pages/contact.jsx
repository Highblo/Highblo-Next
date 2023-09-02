import { Button } from "@/components/Button";
import { FormLayout } from "@/components/FormLayout";
import { SectionTitle } from "@/components/SectionTitle";

const Contact = () => {
  return (
    <div className="p-6 md:w-[85%] md:mx-auto lg:pt-16 xl:w-[780px]">
      <SectionTitle>Contact</SectionTitle>
      <p className="md:mt-4 md:text-center">
        Webサイト・アプリケーション開発のご依頼、お伝えしたいことなどありましたらお気軽にお問い合わせ下さい。
      </p>
      <form className="space-y-5 mt-6 md:space-y-10 md:mt-12">
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
        <Button text="text-gray-700" bg="bg-white">
          送信
        </Button>
        <div>
          <p className="text-xs mb-1 text-center">
            バックエンド実装していないので実際に送りたい場合はこちらから↓
          </p>
          <a
            href="mailto:haruki._71@icloud.com"
            className="py-2 px-4 bg-gray-700 text-white rounded-lg text-center block"
          >
            メールフォームを起動する
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
