"use client";
import React from "react";
import OurProducts from "./_components/OurProducts";
import useScrollToTop from "@/components/utils/useScrollToTop";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Products() {
  useScrollToTop();
  return (
    <>
      <Head>
        <title>Nos Produits</title>
      </Head>
      <div className="">
        <motion.div
          className="relative py-20 bg-[url('/background1.webp')] bg-cover bg-center"
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: [50, -20, 20, 0], opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-green-500 opacity-50"></div>
          <h1 className="relative text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 pb-10 font-bold text-center">
            Nos Produits
          </h1>
          {/* <div className="grid grid-cols-1 gap-20 ">
      <h1 className="text-7xl font-semibold pb-12 text-black text-center py-10">
        Nos Produits
      </h1> */}
        </motion.div>
        <OurProducts />

        {/* <Images /> */}
      </div>
    </>
  );
}
