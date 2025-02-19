import { FaArrowRight } from 'react-icons/fa';

const Card = ({ header, text, borderColor }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg border border-gray-200 p-6 flex flex-col justify-between mb-6 w-[300px] transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg group">
      <div className={`absolute top-0 left-0 h-full w-2 ${borderColor} rounded-l-lg`}></div>
      <div>
        <h2 className="text-lg font-bold text-[#363148] mb-4">{header}</h2>
        <p className="text-sm text-[#d7d7de] mb-8">{text}</p>
      </div>
      
      {/* Gradient fade effect at the bottom right */}
      <div className="absolute bottom-0 right-0 w-full h-full rounded-b-lg">
        <div
          className={`h-full w-full bg-gradient-to-tr from-transparent to-[${borderColor}] opacity-20 rounded-b-lg`}
        ></div>
      </div>
      
      <div className="flex justify-between items-center">
        <button className="text-sm font-semibold text-black relative group">
          Learn more
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
        <div className="border border-gray-600 p-2 rounded-full">
          <FaArrowRight className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Card;
