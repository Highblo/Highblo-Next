import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="py-3 mb-20 text-center space-y-1 sm:mb-32">
      <span className="text-gradient">Highblo@2023</span>
      <ul className="flex justify-center gap-6">
        <li>
          <a href="https://www.instagram.com/haruharu._515/">
            <BsInstagram color="#eb7e63" className="text-2xl md:text-4xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitterSquare color="#1da1f2" className="text-2xl md:text-4xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillYoutube color="red" className="text-2xl md:text-4xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <SiQiita color="#55c500" className="text-2xl md:text-4xl" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Highblo">
            <AiFillGithub color="black" className="text-2xl md:text-4xl" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
