"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import ImageHero from "./HeroItems/ImageHero";
import { ScrollDown } from "./HeroItems/scroll-down";
import Input from "@/components/ui/Input";

export function Hero() {
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
              commercialise &nbsp;
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
              <Input placeholder="Enter your email">Subscribe</Input>
            </motion.div>
          </div>
          <ImageHero />
        </div>
        <ScrollDown />
      </HeroHighlight>
    </motion.div>
  );
}
