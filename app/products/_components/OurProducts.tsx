import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Images } from "./Images";
import { AiOutlineProduct } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { LiaWeightHangingSolid } from "react-icons/lia";

export default function OurProducts() {
  return (
    <div className="relative py-20">
      <motion.h1
        className="text-center text-4xl lg:text-7xl font-bold text-black py-4 lg:py-10"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Nos Produits de Qualité
      </motion.h1>
      <div className="px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 px-4 py-4 lg:py-10 xl:px-20 bg-[#f7f9f8] rounded-xl">
          <motion.div
            className="px-6 py-4 flex items-start border-b-2 lg:border-r-2 lg:border-b-0 border-gray-300"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="hidden md:flex items-center mr-4">
              <AiOutlineProduct className="text-4xl text-[#f33a3a] mr-2" />
            </div>
            <div>
              <h2 className="text-xl font-semibold pb-2">Nos Produits</h2>
              <p className="text-sm md:text-xl text-black/80 font-primary">
                Quality Mar propose une large gamme de produits comprenant
                diverses variétés de tomates (rondes, allongées, cerise grappe),
                courgettes noires, poivrons et pastèques.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="px-6 py-4 flex items-start border-b-2 lg:border-r-2 lg:border-b-0 border-gray-300"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="hidden md:flex items-center mr-4">
              <CiLocationOn className="text-4xl text-[#41c13f] mr-2" />
            </div>
            <div>
              <h2 className="text-xl font-semibold pb-2">Région</h2>
              <p className="text-sm md:text-xl text-black/80 font-primary">
                La production est répartie dans les meilleurs terroirs de la
                région Souss-Massa, dans la plaine du sud du Maroc.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="px-6 py-4 flex items-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="hidden md:flex items-center mr-4">
              <LiaWeightHangingSolid className="text-4xl text-[#f33a3a] mr-2" />
            </div>
            <div>
              <h2 className="text-xl font-semibold pb-2">
                Production Annuelle
              </h2>
              <p className="text-sm md:text-xl text-black/80 font-primary">
                Chaque année, plus de 30 000 tonnes de fruits et légumes sont
                récoltées à Agadir, garantissant des produits fraîchement
                récoltés et de haute qualité.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Images />
    </div>
  );
}
