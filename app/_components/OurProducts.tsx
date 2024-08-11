import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function OurProducts() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView) {
      controls1.start({
        opacity: [0, 1],
        y: [-100, 0],
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
      controls2.start({
        opacity: [0, 1],
        y: [100, 0],
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    }
  }, [inView, controls1, controls2]);
  return (
    // <div className="px-72 py-20  text-white">
    <div className="bg-[#ecfcf4] py-10 text-[#03301f]" ref={ref}>
      <h1 className="text-4xl lg:text-5xl xl:text-7xl text-center font-semibold p-4 ">
        Nos Produits
      </h1>
      <div className="grid grid-cols-2 items-center">
        <motion.div className="bg-gradient-to-l px-32" animate={controls1}>
          <Image
            src="/images/products/vegetables.webp"
            alt="Tomates"
            width={400}
            height={400}
            className="rounded-xl object-contain w-full"
          />
        </motion.div>
        <motion.div className="pr-48" animate={controls2}>
          <p className="text-xl leading-loose font-jakarta pb-10">
            Quality Mar produit diverses tomates, courgettes, poivrons et
            pastèques dans la région Souss-Massa à Agadir. Ils récoltent
            annuellement plus de 30 000 tonnes de fruits et légumes de qualité.
          </p>
          <motion.div
            whileTap={{ scale: 0.9 }}
            // animate={controls2}
            className="flex justify-center items-center"
          >
            <Link
              href="/products"
              className="bg-[#00b254] text-white px-4 py-2 rounded-full hover:bg-[#288b56] transition-all duration-300"
            >
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
