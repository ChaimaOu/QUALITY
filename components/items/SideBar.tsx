"use client";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Links = [
  { name: "ACCUEIL", href: "/" },
  { name: "NOS PRODUITS", href: "/products" },
  { name:"NOS MARQUES", href:"/marques" },
  { name: "À PROPOS", href: "/about-us" },
  { name: "CONTACT", href: "/contact-us" },
];
export default function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);
  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  function handleClose(e:React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    if (target.id === "overlay") {
      setIsOpen(false);
    }
  }
  function handleClick(link: string, e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setActiveLink(link);
    setIsOpen(false);
    router.push(link);
  }

  return (
    <div className="z-50 ">
      <RxHamburgerMenu
        onClick={toggleOpen}
        className="text-2xl text-black/50 cursor-pointer"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="overlay"
            onClick={handleClose}
            className="fixed inset-0 w-full h-full bg-black/50 backdrop-blur-sm grid justify-end z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              exit={{ x: 1000 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col justify-between relative w-64 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <AiOutlineClose
                onClick={toggleOpen}
                className="absolute top-4 right-4 text-2xl text-black/50 cursor-pointer"
              />
              <ul
                className={`flex flex-col gap-8 text-black/80  text-lg font-semibold mt-16 `}
              >
                {Links.map((link) => (
                  <li
                    key={link.href}
                    className="  hover:text-[#00c552] transition-all duration-300"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleClick(link.href, e)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 text-sm font-semibold py-10">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-[#eec044]" />
                  <Link className="pl-2" href="tel:+212(0) 528 81 65 45">
                    +212(0) 528 81 65 45
                  </Link>
                </div>
                <div className="flex items-center">
                  <IoMail className="text-[#eec044]" />
                  <Link className="pl-2" href="mailto:contact@qualitymar.com">
                    contact@qualitymar.com
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


