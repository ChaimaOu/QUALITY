"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const infos = [
  {
    src: "images/whoArewe/agriculture.svg",
    title: "Conditionnement",
    description:
      "Les fruits et légumes de Quality Mar sont emballés dans une station moderne avec contrôle qualité et traçabilité.",
  },
  {
    src: "images/whoArewe/logistics.svg",
    title: "l'équipe logistique",
    description:
      "L'équipe logistique de Quality Mar optimise les opérations pour livrer rapidement les produits, maximisant ainsi leur durée de vie.",
  },
  {
    src: "images/whoArewe/exportation.svg",
    title: "Expansion internationale",
    description:
      "Quality Mar exporte vers l'Union Européenne, les pays scandinaves, la Russie et le Moyen-Orient, avec l'ambition d'étendre ses ventes à d'autres continents.",
  },
];
export default function WhoAreWe() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView) {
      controls1.start({
        opacity: 1,
        y: [100, 0], // Start from 100px below and move to original position
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
      controls2.start({
        opacity: 1,
        y: [-100, 0],
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    } else {
      controls1.start({
        opacity: 0, // Hide when not in view
      });
      controls2.start({
        opacity: 0, // Hide when not in view
      });
    }
  }, [inView, controls1, controls2]);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-[#f2fff8] to-[#acf4d0] flex flex-col items-center "
    >
      <motion.div className="px-4 lg:px-60 text-[#03301f]" animate={controls2}>
        <h1 className=" text-4xl lg:text-5xl xl:text-7xl font-semibold p-10 xl:p-16 text-black text-center ">
          Qui sommes-nous?
        </h1>
        {/* <h4 className="text-lg lg:text-5xl font-bold text-black text-center pb-8">
          Quality Mar
        </h4> */}
        <h4 className="font-extrabold text-xl lg:text-4xl text-[#00b254] text-center pb-4 font-primary">
          Société marocaine, produit et exporte des fruits et légumes.
        </h4>
        <p className="text-base md:text-xl pb-8 text-black/80 text-center font-primary">
          Avec plus de 300 hectares de cultures et 40 000 tonnes annuelles, nous
          approvisionnons les grandes surfaces européennes, garantissant des
          produits de qualité.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 px-10 xl:px-40  py-10 lg:py-10">
        {infos.map((info, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            animate={controls1}
            className="flex flex-col items-center justify-center gap-4 bg-[#e5fdf0] p-4 lg:p-10 rounded-lg shadow-md"
          >
            <Image
              src={info.src}
              alt={info.title}
              width={100}
              height={100}
              className="w-24 h-24 "
            />
            <h3 className="text-xl font-bold">{info.title}</h3>
            <p className="text-center text-black/60 font-primary">
              {info.description}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        animate={controls1}
        className="pb-10 "
      >
        <Link
          href="/about-us"
          className="bg-[#00b254] text-white px-4 py-2 rounded-full hover:bg-[#288b56] transition-all duration-300"
        >
          En savoir plus
        </Link>
      </motion.div>
    </div>
  );
}
