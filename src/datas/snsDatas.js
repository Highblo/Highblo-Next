import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

export const snsDatas = [
  {
    url: "https://www.instagram.com/haruharu._515/",
    icon: <BsInstagram color="#eb7e63" className="text-2xl md:text-4xl" />,
    delay: "delay-0",
  },
  {
    url: "#",
    icon: <FaTwitterSquare color="#1da1f2" className="text-2xl md:text-4xl" />,
    delay: "delay-100",
  },
  {
    url: "#",
    icon: <AiFillYoutube color="red" className="text-2xl md:text-4xl" />,
    delay: "delay-200",
  },
  {
    url: "#",
    icon: <SiQiita color="#55c500" className="text-2xl md:text-4xl" />,
    delay: "delay-300",
  },
  {
    url: "https://github.com/Highblo",
    icon: <AiFillGithub color="black" className="text-2xl md:text-4xl" />,
    delay: "delay-[400]",
  },
];
