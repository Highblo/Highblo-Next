import { BsFillHouseFill } from "react-icons/bs";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";
import { GrContact } from "react-icons/gr";

export const navigationDatas = [
  {
    text: "Home",
    icon: <BsFillHouseFill size={22} />,
    path: "/",
  },
  {
    text: "About",
    icon: <BsFillFilePersonFill size={22} />,
    path: "/about",
  },
  {
    text: "Myblogs",
    icon: <FaBlog size={22} />,
    path: "/myblogs",
  },
  {
    text: "Portfolio",
    icon: <GiOpenTreasureChest size={22} />,
    path: "/portfolio",
  },
  {
    text: "Contact",
    icon: <GrContact size={22} />,
    path: "/contact",
  },
];
