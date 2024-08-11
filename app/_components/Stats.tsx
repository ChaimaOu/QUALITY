"use client";

import Image from "next/image";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="bg-[#f7f9f8] grid grid-cols-1 lg:grid-cols-2 items-center px-10 lg:px-40">
      {/* text */}
      <div>
        <h1 className="text-2xl md:text-5xl font-bold font-jakarta pb-4 py-10">
          Quality Mar en quelque chiffress
        </h1>
        <p className="text-xl font-normal">
          Plus de 300 hectares de cultures, 40,000 tonnes de production
          annuelle, et une présence internationale avec des exportations vers
          les supermarchés européens.
        </p>
      </div>
      {/* stats */}
      <div className="grid grid-cols-2 my-20 p-4 text-center ">
        <div className="border-r-2 border-b-2 p-4">
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-medium">
            <CountUp scrollSpyOnce enableScrollSpy end={300} duration={2} />
            <sup>+</sup>
          </h4>
          <p className="text-sm md:text-lg font-jakarta font-semibold text-[#39a737]">
            Hectares cultivés
          </p>
        </div>
        <div className="border-b-2 p-4">
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-medium">
            <CountUp scrollSpyOnce enableScrollSpy end={30} duration={2} />
            <sup>+</sup>
          </h4>
          <p className="text-sm md:text-lg font-jakarta font-semibold text-[#39a737]">
            Sites de production
          </p>
        </div>
        <div className="border-r-2 p-4">
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-medium">
            <CountUp scrollSpyOnce enableScrollSpy end={20} duration={2} />
            <sup>+</sup>
          </h4>
          <p className="text-sm md:text-lg font-jakarta font-semibold text-[#39a737]">
            Variétés Fruits/Légumes
          </p>
        </div>
        <div className="p-4">
          <h4 className="text-3xl md:text-5xl lg:text-6xl font-medium">
            <CountUp scrollSpyOnce enableScrollSpy end={7} duration={2} />
            <sup>+</sup>
          </h4>
          <p className="text-sm md:text-lg font-jakarta font-semibold text-[#39a737]">
            Mois de production
          </p>
        </div>
      </div>
    </div>
  );
}
