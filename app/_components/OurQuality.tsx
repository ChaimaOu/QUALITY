import React from 'react'
import Certifs from './items/Certifs';

export default function OurQuality() {
  
  return (
    <div className="bg-[url('/background2.webp')] bg-cover bg-no-repeat bg-blend-darken bg-[rgba(0,0,0,0.5)] bg-fixed">
      <div className="pt-10 text-white rounded-t-3xl" id="quality">
        <h3 className="text-3xl lg:text-7xl text-center font-semibold py-8">
          Qualité
        </h3>
        <p className="text-sm lg:text-xl font-jakarta pb-4 text-center leading-[1.75] text-white lg:px-40 px-10">
          Quality Mar s&apos;engage à respecter les normes internationales de
          santé, hygiène, sécurité, milieu social et environnement. Certifiée
          GlobalGAP, notre entreprise adhère aux standards internationaux pour
          la production, le conditionnement et la vente.
        </p>
        <p className="text-sm lg:text-xl font-jakarta pb-10 text-center leading-[1.75] text-white lg:px-40 px-10">
          Nos fruits et légumes sont cultivés selon des méthodes durables et
          responsables, garantissant leur fraîcheur et qualité. Nos sites de
          production et de conditionnement, régulièrement audités, répondent aux
          exigences européennes les plus strictes, assurant la sécurité
          alimentaire et la satisfaction de nos partenaires commerciaux
          étrangers.
        </p>
        <div className="py-10 bg-white">
          <Certifs />
        </div>
      </div>
    </div>
  );
}
