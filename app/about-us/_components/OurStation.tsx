'use client'
import Image from 'next/image';
import React from 'react'
import CountUp from 'react-countup';
import {motion} from 'framer-motion'

export default function OurStation() {

  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-0 sm:px-20 xl:px-40">
      <>
        <motion.div
          className="my-10 p-2 sm:p-10 w-full px-4 sm:px-20 font-jakarta bg-white rounded-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl sm:text-5xl lg:text-5xl font-semibold text-center pb-10">
            Conditionnement{" "}
          </h2>
          <p className="font-jakarta font-normal text-md">
            Tous Ies fruits et Iégumes récoltés sont emballés dans notre station
            de conditionnement, chacune équipée de : un pré calibrage avec tris
            couleurs.
          </p>
          <p className="font-jakarta font-normal text-md">
            Des lignes de conditionnement. Des lignes d&apos;emballage spécifiques :
            pour Ies cartons, pour les plateaux, pour les barquettes et pour les
            filets.
          </p>
          <p className="font-jakarta font-normal text-md">
            Un laboratoire permettant d&apos;effectuer les contröles qualité de nos
            fruits.
          </p>
          <p className="font-jakarta font-normal text-md">
            Fruits récoltés et emballés sur place Quality Mar a incorporé dans
            son processus de onditionnement toutes Ies bonnes pratiques
            relatives au conditionnement de ses produits.
          </p>
          <p className="font-jakarta font-normal text-md">
            La station de conditionnement Quality Mar est dotée d&apos;un équipement
            de pointe et de systémes d&apos;information (no de traqabilité,
            code-barres, ...) respectant les derniers standards de
            certification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 px-2 sm:p-10 h-full">
          <motion.div
            className="relative w-full h-64 overflow-hidden rounded-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src="/images/certifs/quality-bg.jpg"
              alt="station"
              width={500}
              height={600}
              className="rounded-xl w-full h-full"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-4 bg-white rounded-xl p-8">
            <motion.div
              className="bg-[#f7f9f8] rounded-xl p-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h4 className="text-3xl font-medium">
                <CountUp scrollSpyOnce enableScrollSpy end={300} duration={2} />
                <sup>+</sup>
              </h4>
              <p className="text-sm  font-jakarta font-semibold text-[#39a737]">
                Hectares cultivés
              </p>
            </motion.div>
            <motion.div
              className="bg-[#f7f9f8] rounded-xl p-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <h4 className="text-3xl font-medium">
                <CountUp scrollSpyOnce enableScrollSpy end={30} duration={2} />
                <sup>+</sup>
              </h4>
              <p className="text-sm  font-jakarta font-semibold text-[#39a737]">
                Sites de production
              </p>
            </motion.div>
            <motion.div
              className="bg-[#f7f9f8] rounded-xl p-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <h4 className="text-3xl font-medium">
                <CountUp scrollSpyOnce enableScrollSpy end={20} duration={2} />
                <sup>+</sup>
              </h4>
              <p className="text-sm  font-jakarta font-semibold text-[#39a737]">
                Variétés Fruits/Légumes
              </p>
            </motion.div>
            <motion.div
              className="bg-[#f7f9f8] rounded-xl p-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <h4 className="text-3xl font-medium">
                <CountUp scrollSpyOnce enableScrollSpy end={7} duration={2} />
                <sup>+</sup>
              </h4>
              <p className="text-sm  font-jakarta font-semibold text-[#39a737]">
                Mois de production
              </p>
            </motion.div>
          </div>
        </div>
      </>
    </div>
  );
}