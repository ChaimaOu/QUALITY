"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function OurMarket() {
  return (
    <div className="bg-[#edfff6]">
      <h2 className="text-xl sm:text-2xl lg:text-5xl font-semibold sm:px-20 px-10 pt-20 text-center text-[#03301f] bg-[#edfff6]">
        NOUS PRDUISONS AU MAROC ET ON COMMERCIALISE NOS PRODUITS DANS TOUTE
        L&apos;EUROPE
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-2 sm:px-20 lg:px-40 py-20">
        <motion.div
          className="flex flex-col gap-4 px-6 sm:px-12 py-8 rounded-xl bg-white shadow-md"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          // whileHover={{ scale: 1.05, transition: { duration: 0.3, delay: 0 } }}
        >
          <h5 className="text-xl font-bold">
            Le rôle essentiel de l&apos;équipe logistique chez Quality Mar
          </h5>
          <p className="font-jakarta text-base font-normal">
            L&apos;equipe logistique de Quality Mar est au coeur du systeme
            global des operations qui assure tous les produits arrivent a
            destination de la maniere la plus efficace, le plus rapidement
            possible afin de maximiser leur duree de vie.
          </p>
          <div className="relative w-full h-64 overflow-hidden rounded-xl">
            <motion.div
              className="absolute w-full h-full"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, delay: 0 },
                rotate: 2,
              }}
            >
              <Image
                src="/images/aboutus/logistique.jpg"
                alt="quality"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 px-6 sm:px-16 py-8 rounded-xl bg-white shadow-md"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          // whileHover={{ scale: 1.1, transition: { duration: 0.3 }, rotate: 2 }}
        >
          <div className="relative w-full h-64 overflow-hidden rounded-xl">
            <motion.div
              className="absolute w-full h-full"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, delay: 0 },
                rotate: 2,
              }}
            >
              <Image
                src="/images/aboutus/exportation.jpg"
                alt="quality"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
          </div>
          <h5 className="text-lg font-bold">
            Expansion internationale de Quality Mar
          </h5>
          <p>
            Quality Mar exporte a differentes destinations a
            l&apos;international: Union Europeenne, Pays Scandinaves, Russie,
            Moyen-Orient. Ambitieuse et ayant une production consequente,
            l&apos;entreprise aspire a etendre ses ventes vers l&apos;autres
            continents.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
