import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const marques = [
  "/images/marques/bak.jpg",
  "/images/marques/ifrian.jpg",
  "/images/marques/soussi.jpg",
  "/images/marques/tamam.png",
];

export default function OurMarks() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView) {
      controls1.start({
        opacity: 1,
        scale: [0, 1], // Increased scale
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
      controls2.start({
        x: [-100, 0],
        opacity: [0, 1],
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    }
  }, [inView, controls1, controls2]);
  return (
    <div className="py-20 px-40" ref={ref}>
      <h1 className="text-4xl lg:text-5xl xl:text-7xl text-center font-semibold pb-20 ">
        Nos Marques
      </h1>
      <div className="grid grid-cols-2 gap-10 items-center">
        <motion.div animate={controls2}>
          <p className="text-xl leading-loose font-sans pb-10">
            Quality Mar fidélise ses clients et introduit des marques sur divers
            marchés grâce à une stratégie commerciale efficace, des produits de
            qualité et des certifications internationales.
          </p>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex justify-center items-center"
          >
            <Link
              href="/marques"
              className="bg-[#00b254] text-white px-4 py-2 rounded-full hover:bg-[#288b56] transition-all duration-300"
            >
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {marques.map((marque, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              animate={controls1}
            >
              <Image
                src={marque}
                alt={`Our Marks ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-32 object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
