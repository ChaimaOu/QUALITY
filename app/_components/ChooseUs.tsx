"use client";
import Accordion from "./items/Accordion";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

export default function ChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5,
        },
      },
    }),
    []
  );

  const itemVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (inView) {
    }
  }, [inView, containerVariants]);

  const infos = [
    {
      id: 1,
      name: "Produit frais de qualité",
      description:
        "Des produits et des services conformes à la réglementation en vigueur et répondant aux exigences des clients.",
    },
    {
      id: 2,
      name: "Sécurité Alimentaire",
      description:
        "Une qualité optimale, une sécurité alimentaire et une traçabilité depuis l’origine.",
    },
    {
      id: 3,
      name: "Démarche Qualité",
      description:
        "Quality Mar a constamment pour objectif d’améliorer ses performances et la qualité de ses produits.",
    },
  ];
  return (
    <div
      className="bg-white grid py-20 w-full px-10 lg:px-40"
      id="choose_us"
      ref={ref}
    >
      <div className="w-full">
        <h3 className=" font-semibold text-4xl lg:text-8xl pb-12 text-black text-center">
          Pourquoi nous choisir ?
        </h3>
        <h2 className="text-lg font-bold lg:text-2xl pb-8 text-[#00b254] text-center">
          Production <span className="text-[#f33a3a]">&</span> Exportation des
          Produits Agricoles
        </h2>
        <p className=" text-black/80 text-sm lg:text-xl pb-16 text-center">
          Quality Mar aspire à tirer le maximum des ressources naturelles
          marocaines, pour soutenir ses activités et promouvoir une agriculture
          écologiquement responsable.
        </p>
      </div>
      <motion.div
        className=""
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {infos.map((info, index) => (
          <motion.div variants={itemVariants} key={info.id}>
            <Accordion info={info} key={info.id} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
