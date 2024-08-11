import React from "react";
import { motion } from "framer-motion";

export default function OurMarks() {
  return (
    <motion.div
      className="px-10 lg:px-20 mt-20 py-12 bg-[#edfff6] text-[#03301f]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <p className="text-xl lg:text-2xl text-center leading-[1.75] lg:px-10 px-10 font-sans">
        Quality Mar a gagné la fidélité de ses clients et introduit différentes
        marques sur divers marchés grâce à une excellente stratégie commerciale.
        Nous nous efforçons d&apos;obtenir la satisfaction totale de nos clients
        en répondant à leurs attentes et en améliorant constamment la qualité de
        nos produits. Orientée client, notre priorité est la satisfaction de nos
        partenaires et consommateurs, soutenue par diverses certifications
        internationales.
      </p>
    </motion.div>
  );
}
