import { Line } from "rc-progress";

export const Skill = ({ imagePath, value, text }) => {
  return (
    <div className="space-y-1 md:space-y-3">
      <div className="flex items-center gap-1 text-lg md:text-xl">
        <img
          src={`/images/${imagePath}`}
          alt="アイコン画像"
          className="w-[20px]"
        />
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
