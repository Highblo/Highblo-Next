import { Line } from "rc-progress";
import Image from "next/image";

export const Skill = ({ imagePath, value, text }) => {
  return (
    <div className={`space-y-1 md:space-y-3`}>
      <div className="flex items-center gap-1 text-lg md:text-xl">
        <div className="h-auto">
          <Image
            src={`/images/${imagePath}`}
            alt="アイコン画像"
            width={20}
            height={20}
          />
        </div>
        <p>{text}</p>
      </div>
      <div>
        <Line
          percent={value}
          strokeColor="rgb(103 232 249)"
          strokeWidth={2}
          trailWidth={2}
        />
        <p className="text-end md:text-lg">{value}%</p>
      </div>
    </div>
  );
};
