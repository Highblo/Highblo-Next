export const Button = ({ children, text, bg, hover, onClick }) => {
  return (
    <button
      className={`w-full ${text} ${bg} border border-gray-700 rounded-lg py-2 transition-all duration-300 ease-in ${hover}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
