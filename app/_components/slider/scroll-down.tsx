import { CiCircleChevDown } from "react-icons/ci";
import { motion } from "framer-motion";
export const ScrollDown = () => {
  return (
    <div className="flex justify-center mt-60">
      <div className="relative w-6 h-12 border-2 border-gray-800 rounded-full">
        <div className="absolute w-1 h-2 bg-gray-800 rounded-full left-1/2 transform -translate-x-1/2 top-1 animate-wheel"></div>
      </div>
    </div>
  );
};
