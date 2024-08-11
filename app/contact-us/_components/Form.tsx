"use client";

import React from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "@/components/utils/useForm";
import {motion} from "framer-motion"
export default function Form() {

  const {values, handleChange, handleSubmit, onSubmit} = useForm({
    fname:"",
    lname:"",
    phone:"",
    email:"",
    city:"",
    zip:"",
    adress:"",
    subject:"",
    message:"",
  })

  return (
    <>
      <motion.div
        className="w-full bg-white p-10 rounded-xl sm:shadow-md"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: [20, -10, 10, 0] }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="pb-4">
          <h3 className="text-2xl font-bold font-jakarta pb-2">
            Contactez-nous
          </h3>
          <p className="text-base font-jakarta">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              className="py-2 px-4 rounded-md outline-[#52b351] border border-black-gray-500 shadow-sm block"
              type="text"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              placeholder="Nom"
              required
            />
            <input
              className="py-2 px-4 rounded-md outline-[#52b351] border border-black-gray-500 shadow-sm block"
              type="text"
              name="lname"
              value={values.lname}
              onChange={handleChange}
              placeholder="Prenom"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              className="py-2 px-4 rounded-md outline-[#52b351] border border-black-gray-500 shadow-sm block"
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />
            <input
              className="py-2 px-4 rounded-md outline-[#52b351] border border-black-gray-500 shadow-sm block"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <input
              className="py-2 px-4 rounded-md outline-[#52b351] border border-black-gray-500 shadow-sm block"
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              placeholder="Ville"
              required
            />
            <input
              className="py-2 px-4 rounded-md outline-[#52b351] border border-black-gray-500 shadow-sm block"
              type="number"
              name="zip"
              value={values.zip}
              onChange={handleChange}
              placeholder="Code Postal"
              required
            />
          </div> */}
          {/* <div className="w-full ">
            <input
              className="w-full py-2 px-4 rounded-md outline-[#52b351] border border-black-gray-500 shadow-sm "
              type="text"
              name="adress"
              value={values.adress}
              onChange={handleChange}
              placeholder="Adress"
              required
            />
          </div> */}
          <div className="w-full ">
            <input
              className="w-full py-2 px-4 rounded-md outline-[#52b351]   border border-black-gray-500 shadow-sm "
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              placeholder="Sujet"
              required
            />
          </div>
          <div className="w-full ">
            <textarea
              rows={5}
              className="w-full py-2 px-4 rounded-md outline-[#52b351] border border-black-gray-500 shadow-sm"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
          </div>
          <button
            className="md:w-1/6 bg-[#52b351] text-white px-4 py-2 rounded-full hover:bg-[#429241] transition-all duration-300"
            type="submit"
          >
            Envoyer
          </button>
        </form>
        <ToastContainer />
      </motion.div>
    </>
  );
}
