import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

export const Header = () => {
  return (
    <header className=" p-2 text-center space-y-1">
      <p className="text-red-300">Highblo</p>
      <ul className="flex justify-center gap-2">
        <li>
          <a href="#">
            <BsInstagram color="#eb7e63" size={22} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitterSquare color="#1da1f2" size={22} />
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillYoutube color="red" size={22} />
          </a>
        </li>
        <li>
          <a href="#">
            <SiQiita color="#55c500" size={22} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Highblo">
            <AiFillGithub color="black" size={22} />
          </a>
        </li>
      </ul>
    </header>
  );
};
