'use client'
import Head from 'next/head';
import React from 'react'
import Form from './_components/Form';
import ContactInfo from './_components/ContactInfo';
import Map from './_components/Map';
import { motion } from 'framer-motion';

function ContactUs() {

  return (
    <>
      <Head>
        <title>Contactez-Nous</title>
      </Head>
      <div>
        <motion.div
          className="relative py-20 bg-[url('/background2.webp')] bg-cover bg-center"
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: [50, -20, 20, 0], opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-green-500 opacity-50"></div>
          <h1 className="relative text-6xl bg-clip-text  pb-10 text-white font-bold text-center">
            Contactez-Nous
          </h1>
        </motion.div>
        <motion.div className="flex flex-col lg:flex-row gap-4 sm:px-20 lg:px-20 xl:px-60 py-10">
          <ContactInfo />
          <Form />
        </motion.div>
        <Map />
      </div>
    </>
  );
}

export default ContactUs;