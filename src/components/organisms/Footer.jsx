import { snsDatas } from "@/datas/snsDatas";

export const Footer = () => {
  return (
    <footer className="py-3 mb-20 text-center space-y-1 sm:mb-32">
      <span className="text-gradient">Highblo@2023</span>
      <ul className="flex justify-center gap-6">
        {snsDatas.map(({ url, icon }) => (
          <li key={icon}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
