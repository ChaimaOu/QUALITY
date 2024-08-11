"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import ImageHero from "./ImageHero";
import Image from "next/image";
import { ScrollDown } from "./scroll-down";

export function Slider1() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.5,
      }}
    >
      <HeroHighlight className="px-20 flex flex-col justify-between">
        {/* <div className="flex justify-center items-center pb-20">
        <Image src="/logo.svg" alt="1" width={500} height={500} />
      </div> */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 justify-center w-full">
          <div className="grid grid-cols-1 gap-12">
            <motion.h1
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,

                x: [-100, 20, 0],
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="text-2xl md:text-4xl xl:text-5xl font-bold text-neutral-700  text-center lg:text-left max-w-5xl leading-relaxed lg:leading-loose w-full "
              style={{ lineHeight: "1.5" }}
            >
              Quality Mar est une entreprise marocaine qui produit et
              commercialise
              <Highlight className="text-white">
                des produits alimentaires de haute qualite.
              </Highlight>
            </motion.h1>
            {/* Input */}
            <motion.div
              className="mt-10 flex justify-center xl:justify-start w-full lg:w-4/5 relative "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: [-100, 20, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
            >
              <div className="relative w-full mt-10">
                <input
                  type="text"
                  className="text-black font-jakarta font-normal text-lg rounded-full border-2 border-[#5dca5b] px-4 py-3 outline-none w-full "
                  placeholder="Enter your email"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 font-jakarta font-normal text-lg bg-[#5dca5b] text-white rounded-full hover:bg-[#52b351] transition-all duration-300 px-4 py-2">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
          <ImageHero />
        </div>
        <ScrollDown />
      </HeroHighlight>
    </motion.div>
  );
}
