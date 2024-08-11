import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { motion } from "framer-motion";
import {
  Accordion as UIAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Accordion({
  info,
}: {
  info: { id: number; name: string; description: string };
}) {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  function toggleOpen(id: number) {
    setIsOpen((prev) => (prev === id ? null : id));
    // isOpen === id ? setIsOpen(null) : setIsOpen(id);
  }
  return (
    // <div
    //   className={`rounded-md mb-4 transition-all duration-300 ${
    //     isOpen === info.id ? "border border-black/50 " : "border-none"
    //   } `}
    // >
    //   <div
    //     className={`w-full  ${
    //       isOpen === info.id ? "border-b border-black/50" : ""
    //     } `}
    //   >
    //     <div
    //       className={`flex items-center text-black justify-between text-sm lg:text-md font-semibold py-3 px-4 transition-all duration-300 ${
    //         isOpen === info.id ? "" : "bg-[#f2f2f2] rounded-md"
    //       } `}
    //     >
    //       <h4>{info.name}</h4>
    //       <div
    //         onClick={() => toggleOpen(info.id)}
    //         className={`p-2  rounded-full cursor-pointer transition-all duration-300 ${
    //           isOpen === info.id
    //             ? "bg-[#ffa9ab]  text-white"
    //             : "text-black bg-white"
    //         }`}
    //       >
    //         {isOpen === info.id ? <LuMinus /> : <LuPlus />}
    //       </div>
    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className={`p-2 text-sm lg:text-md text-black/80 `}>
    //       <p>{info.description}</p>
    //     </div>
    //   )}
    // </div>

      <UIAccordion type="single" collapsible>
        <AccordionItem value="item-1">
          {/* <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          > */}
          <AccordionTrigger className="text-black text-base lg:text-2xl font-semibold">{info.name}</AccordionTrigger>
          {/* </motion.div>/ */}
          <AccordionContent className="text-black/80 lg:text-xl py-4">
            {info.description}
          </AccordionContent>
      </AccordionItem>
    </UIAccordion>
  );
}
