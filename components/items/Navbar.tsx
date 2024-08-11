"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Links = [
  { name: "ACCUEIL", href: "/" },
  { name: "NOS PRODUITS", href: "/products" },
  { name: "NOS MARQUES", href: "/marques" },
  { name: "À PROPOS", href: "/about-us" },
  { name: "CONTACT", href: "/contact-us" },
];

export default function Navbar() {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();
  const pathname = usePathname();

  // Update the active link based on the current pathname
  useEffect(() => {
    // setActiveLink(window.location.pathname);
    setActiveLink(pathname || "/");
  }, [pathname]);

  // Handle link click events
  function handleClick(link: string, e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setActiveLink(link);
    router.push(link);
  }
  return (
    <ul className="hidden lg:flex gap-8 items-center text-black/50 text-lg font-medium">
      {Links.map((link) => (
        <motion.li
          key={link.href}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <span
            className={
              activeLink === link.href
                ? "font-bold relative"
                : "hover:text-[#00c552] transition-all duration-300 relative"
            }
          >
            <Link href={link.href} onClick={(e) => handleClick(link.href, e)}>
              {link.name}
            </Link>
            <motion.div
              className="absolute bottom-0 left-0 h-[3px] bg-[#00c552]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              animate={{ width: activeLink === link.href ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </motion.li>
      ))}
    </ul>
  );

}