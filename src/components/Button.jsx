export const Button = ({ children, text, bg, onClick }) => {
  return (
    <button
      className={`w-full ${text} ${bg} border border-gray-700 rounded-lg py-2 transition-all duration-300 ease-in hover:text-white hover:bg-gray-700`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
