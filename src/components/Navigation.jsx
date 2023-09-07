import Link from "next/link";

import { navigationDatas } from "@/datas/navigationDatas";

export const Navigation = () => {
  return (
    <ul className="flex justify-center bg-white w-[96%] rounded-full text-sm font-bold fixed bottom-3 left-1/2 -translate-x-1/2 shadow-lg z-50 sm:justify-around sm:bottom-6 md:text-base xl:w-[80%] xl:justify-center xl:gap-28">
      {navigationDatas.map(({ text, icon, path }) => (
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
