import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

export const Header = () => {
  return (
    <header className="p-2 text-center space-y-1">
      <p className="text-red-400">Highblo@2023</p>
      <ul className="flex justify-center gap-6">
        <li>
          <a href="#">
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
    </header>
  );
};
