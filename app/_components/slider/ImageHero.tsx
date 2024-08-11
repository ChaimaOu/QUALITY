import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ImageHero() {
  return (
    <div className="relative hidden lg:block">
      <motion.div
        className="absolute left-0 top-8 z-20 bg-white w-2/5 rounded-xl"
        initial={{
          opacity: 0,
          x: -1000,
        }}
        animate={{
          opacity: 1,
          x: [0, 50, 0],
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: "easeInOut",
        }}
      >
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          aspernatur sapiente veritatis{" "}
        </p>
      </motion.div>
      <motion.div
        className="absolute -bottom-20 -right-10 z-20 bg-white w-2/5 rounded-xl"
        initial={{
          opacity: 0,
          x: 1000, // Ensuring it comes from the right
        }}
        animate={{
          opacity: 1,
          x: [0, -50, 30, -25, 0],
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: "easeInOut",
        }}
      >
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          aspernatur sapiente veritatis
        </p>
      </motion.div>
      <motion.div
        className="absolute flex justify-center items-center right-0 z-10"
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: [100, -40, 20, -20, 0],
        }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/home/Hero.png"
          alt="1"
          width={600}
          height={600}
          className=""
        />
      </motion.div>
      {/* <motion.div
        className="absolute right-0"
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: [100, -50, 30, -25, 0], // Corrected initial x value
        }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/home/Hero.png"
          alt="1"
          width={600}
          height={600}
          className=" blur-sm"
       />
      </motion.div> */}
    </div>
  );
}