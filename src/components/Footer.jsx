import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <footer className="py-3 mb-20 text-center space-y-1 sm:mb-32">
      <span className="text-gradient">Highblo@2023</span>
      <ul className="flex justify-center gap-6">
        <li
          ref={ref}
          className={`scroll-animation1 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="https://www.instagram.com/haruharu._515/">
            <BsInstagram color="#eb7e63" className="text-2xl md:text-4xl" />
          </a>
        </li>
        <li
          ref={ref}
          className={`scroll-animation1 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="#">
            <FaTwitterSquare color="#1da1f2" className="text-2xl md:text-4xl" />
          </a>
        </li>
        <li
          ref={ref}
          className={`scroll-animation1 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="#">
            <AiFillYoutube color="red" className="text-2xl md:text-4xl" />
          </a>
        </li>
        <li
          ref={ref}
          className={`scroll-animation1 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="#">
            <SiQiita color="#55c500" className="text-2xl md:text-4xl" />
          </a>
        </li>
        <li
          ref={ref}
          className={`scroll-animation1 delay-[400ms] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href="https://github.com/Highblo">
            <AiFillGithub color="black" className="text-2xl md:text-4xl" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
