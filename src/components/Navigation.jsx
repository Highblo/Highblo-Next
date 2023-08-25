import Link from "next/link";

import { BsFillHouseFill } from "react-icons/bs";
import { BsFillFilePersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { GiOpenTreasureChest } from "react-icons/gi";
import { GrContact } from "react-icons/gr";

export const Navigation = () => {
  const navigationData = [
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
      text: "MySkill",
      icon: <GiSkills size={22} />,
      path: "/myskill",
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

  return (
    <ul className="flex justify-center bg-white w-[96%] rounded-full text-sm font-bold fixed bottom-4 left-1/2 -translate-x-1/2 shadow-lg sm:justify-around sm:bottom-6 md:text-base xl:w-[80%] xl:justify-center xl:gap-28">
      {navigationData.map(({ text, icon, path }) => (
        <li key={path}>
          <Link
            href={path}
            className="flex flex-col items-center gap-1 p-2 hover:opacity-60 transition-opacity duration-300 ease-in sm:p-4"
          >
            {icon}
            <p>{text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
