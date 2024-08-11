"use client";
import { motion, useMotionValue, animate, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react'
import useMeasure from 'react-use-measure';

const images = [
  "/images/certifs/onssa_a.webp",
  "/images/certifs/bcpfood.png",
  "/images/certifs/globalgap.png",
  "/images/certifs/sedex.png",
  "/images/certifs/ICS.png",
];
export default function Certifs() {


  return (
    <motion.div className="grid grid-cols-3 md:flex justify-between items-center md:px-20">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="certif"
          className="w-24 h-24 object-contain  hover:grayscale-0 transition-all duration-300  grayscale"
          //  filter grayscale
          width={200}
          height={200}
          style={{ userSelect: "none" }}
          draggable="false"
        ></Image>
      ))}
    </motion.div>
  );
}
