import Image from "next/image";
import { Tab, Tabs } from "@/components/ui/tabs";
import { motion } from "framer-motion";


export function MarksTabs() {
  const tabs: Tab[] = [
    {
      title: "IFRIAN",
      value: "IFRIAN",
      content: (
        <div className="w-full grid grid-cols-1 overflow-hidden  h-full p-10 text-xl md:text-2xl  rounded-xl font-medium text-black bg-gradient-to-br bg-[#e3f0cd]">
          <div className="flex justify-center pb-4">
            <Image
              src="/images/marques/ifrian.jpg"
              alt="IFRIAN"
              width="600"
              height="600"
              className="object-cover object-left-top rounded-xl"
            />
          </div>
          <p className="font-primary font-medium text-lg text-black text-center">
            IFRIAN est notre marque emblématique, reconnue pour sa sélection
            minutieuse de fruits de premiére qualité. Chaque fruit portant Ie
            label IFRIAN est cultivé avec soin, récolté à maturité optimale et
            rigoureusement contrlé pour vous offrir une expérience gustative
            supérieur.
          </p>
        </div>
      ),
    },
    {
      title: "SOUSSI",
      value: "SOUSSI",
      content: (
        <div className="w-full grid overflow-hidden  h-full p-10 text-xl md:text-2xl  rounded-xl font-medium text-black bg-gradient-to-br bg-[#f3d0ce] font-jakarta">
          <div className="flex justify-center pb-4">
            <Image
              src="/images/marques/soussi.jpg"
              alt="SOUSSI"
              width="600"
              height="600"
              className="object-cover object-left-top rounded-xl"
            />
          </div>
          <p className="font-primary font-medium text-lg text-[#4f894f] text-center">
            SOUSSI est notre marque symbolique, II représente l&apos;origine de
            nos produits et l&apos;identité de notre société. Soussi est
            caractérisé par la fiabilité et la crédibilité en termes produits et
            sa qualité.
          </p>
        </div>
      ),
    },

    {
      title: "TAMAM",
      value: "TAMAM",
      content: (
        <div className="w-full grid grid-cols-1 overflow-hidden  h-full p-10 text-xl md:text-2xl  rounded-xl font-medium text-black bg-gradient-to-br bg-[#e1c0a0]">
          <div className="flex justify-center pb-4">
            <Image
              src="/images/marques/tamam.png"
              alt="TAMAM"
              width="600"
              height="600"
              className="object-cover object-left-top rounded-xl "
            />
          </div>
          <p className="font-primary font-medium text-lg text-[#4f894f] text-center">
            Avec Tamam, nous comprenons que chaque client a des préférences et
            des exigences spécifiques. C&apos;est pourquoi nous avons développé
            Tamam comme une marque dédiée à la personnalisation de nos produits
            pour répondre à vos besoins.
          </p>
        </div>
      ),
    },
    {
      title: "BAK",
      value: "BAK",
      content: (
        <div className="w-full grid grid-cols-1 overflow-hidden  h-full p-10 text-xl md:text-2xl  rounded-xl font-medium text-black bg-gradient-to-br bg-[#f3d0ce] font-jakarta">
          <div className="flex justify-center pb-4">
            <Image
              src="/images/marques/bak.jpg"
              alt="BAK"
              width="600"
              height="600"
              className="object-cover object-left-top rounded-xl"
            />
          </div>
          <p className="font-primary font-medium text-lg text-[#4f894f] text-center">
            BAK est notre marque de qualité et fraicheur avec des de meilleure
            qualité triée soigneusement pour satisfaire vos besoins au niveau du
            calibre, coloration, maturité.
          </p>
        </div>
      ),
    },
  ];

  return (
    <motion.div className="h-[20rem] md:h-[30rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20"
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{
        duration:0.5,
        delay:1.5
      }
    }}>
      <Tabs tabs={tabs} />
    </motion.div>
  );
}
