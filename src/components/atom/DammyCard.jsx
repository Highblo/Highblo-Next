export const DammyCard = ({ bgGradient, hover }) => {
  return (
    <div
      className={`${bgGradient} grid place-items-center scale-90 p-5 text-xl rounded-xl text-white cursor-pointer transition duration-300 ${hover} md:w-[32%] md:h-[200px] md:text-2xl`}
    >
      Coming Soon
    </div>
  );
};
