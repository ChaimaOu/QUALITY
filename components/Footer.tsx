import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

export default function Footer() {
  return (
    // <footer>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-black text-white px-20 lg:px-60 py-20 ">
    //     <div className="">
    //       <div>
    //         <Link href="/">
    //           <Image src="/logo.svg" alt="logo" width={150} height={150} />
    //         </Link>
    //       </div>
    //       <div>
    //         <p className="py-6 text-sm text-white/80">
    //           Quality Mar est une société marocaine de production et exportation
    //           des fruits et légumes
    //         </p>
    //       </div>
    //       <div className="flex gap-6">
    //         <Link
    //           href="/"
    //           className="bg-[#1f1e17] rounded-full p-3 hover:bg-[#292823] transition-all duration-300"
    //         >
    //           <FaFacebookF />
    //         </Link>
    //         <Link
    //           href="/"
    //           className="bg-[#1f1e17] rounded-full p-3 hover:bg-[#292823] transition-all duration-300"
    //         >
    //           <FaInstagram />
    //         </Link>
    //         <Link
    //           href="/"
    //           className="bg-[#1f1e17] rounded-full p-3 hover:bg-[#292823] transition-all duration-300"
    //         >
    //           <FaLinkedinIn />
    //         </Link>
    //         <Link
    //           href="/"
    //           className="bg-[#1f1e17] rounded-full p-3 hover:bg-[#292823] transition-all duration-300"
    //         >
    //           <FaTwitter />
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="">
    //       <div>
    //         <p className="font-semibold text-lg pb-6">Explore</p>
    //       </div>
    //       <div>
    //         <ul className="font-light text-xs flex flex-col gap-3 text-white/70  transition-all duration-300">
    //           <li className="flex gap-2 hover:text-white transition-all duration-300">
    //             <FaLeaf />
    //             <Link href="">NOS PRODUITS</Link>
    //           </li>
    //           <li className="flex gap-2 hover:text-white transition-all duration-300">
    //             <FaLeaf />
    //             <Link href="">NOS STATION</Link>
    //           </li>
    //           <li className="flex gap-2 hover:text-white transition-all duration-300">
    //             <FaLeaf />
    //             <Link href="">NOS MARQUES</Link>
    //           </li>
    //           <li className="flex gap-2 hover:text-white transition-all duration-300">
    //             <FaLeaf />
    //             <Link href="">NOS MARCHE</Link>
    //           </li>
    //           <li className="flex gap-2 hover:text-white transition-all duration-300">
    //             <FaLeaf />
    //             <Link href="">QUALITE</Link>
    //           </li>
    //           <li className="flex gap-2 hover:text-white transition-all duration-300">
    //             <FaLeaf />
    //             <Link href="">CONTACT-NOUS</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="">
    //       <div>
    //         <p className="font-semibold text-lg pb-6">News</p>
    //       </div>
    //       <div>
    //         <div></div>
    //         <div></div>
    //       </div>
    //     </div>
    //     <div className="">
    //       <div>
    //         <p className="font-semibold text-lg pb-6">Contact</p>
    //       </div>
    //       <div className="flex flex-col gap-4 text-sm text-white/80">
    //         <div className="flex items-center">
    //           <FaPhoneAlt className="text-white" />
    //           <Link className="pl-2" href="tel:+212(0) 528 81 65 45">
    //             +212(0) 528 81 65 45
    //           </Link>
    //         </div>
    //         <div className="flex items-center">
    //           <IoMail className="text-white" />
    //           <Link className="pl-2" href="mailto:contact@qualitymar.com">
    //             contact@qualitymar.com
    //           </Link>
    //         </div>
    //         <div className="flex items-center">
    //           <FaLocationDot className="text-white" />
    //           <p className="pl-2">
    //             Imm Annakhil, Sidi Bibi, Chtouka Ait Baha, Maroc
    //           </p>
    //         </div>
    //         <div className="hidden lg:block">
    //           <form>
    //             <div className="flex">
    //               <div className="relative w-full">
    //                 <input
    //                   type="text"
    //                   className="block py-3 px-5 w-full z-20 text-sm text-gray-900 bg-gray-50  dark:placeholder-gray-400  outline-none rounded-xl"
    //                   placeholder="Your Email Adress"
    //                 />
    //                 <button
    //                   type="submit"
    //                   className="absolute top-0 end-0 py-3 px-4 h-full text-sm font-medium text-white bg-[#4baf47] rounded-r-xl border border-[#4baf47] hover:bg-[#4baf47] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#4baf47] dark:hover:bg-[#4baf47] dark:focus:ring-[#4baf47]"
    //                 >
    //                   <IoIosSend />
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-full text-center bg-black text-white/80 pb-4">
    //     <hr className="w-full border-white/50 pb-4" />
    //     <p className="text-sm">All rights reserved © 2024 Quality Maroc</p>
    //   </div>
    // </footer>
    <footer className="w-full bg-[#18181b] text-white px-10 md:px-20 lg:px-40  rounded-t-3xl font-jakarta">
      <div className="flex flex-col md:flex-row md:justify-between py-10 md:py-20 md:items-center">
        <div className="md:w-3/5 pb-10 grid grid-cols-1 gap-4">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
          <p className="text-3xl xl:text-5xl font-bold lg:w-4/5">
            Production et exportation de fruits et légumes du Maroc.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 text-lg">
          <div className="flex items-center">
            <FaPhoneAlt className="text-white" />

            <Link className="pl-2" href="tel:+212(0) 528 81 65 45">
              +212(0) 528 81 65 45
            </Link>
          </div>

          <div className="flex items-center">
            <IoMail className="text-white" />

            <Link className="pl-2" href="mailto:contact@qualitymar.com">
              contact@qualitymar.com
            </Link>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="text-white" />
            <p className="pl-2">
              Imm Annakhil, Sidi Bibi, Chtouka Ait Baha, Maroc
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 py-6 items-center border-t border-white/50">
        <div>All rights reserved © 2024 Quality Maroc</div>
           <div className="flex gap-6">
             <Link
               href="/"
               className="bg-[#1f1e17] rounded-full p-3 hover:bg-[#292823] transition-all duration-300"
             >
               <FaFacebookF />
             </Link>
             <Link
               href="/"
               className="bg-[#1f1e17] rounded-full p-3 hover:bg-[#292823] transition-all duration-300"
             >
               <FaInstagram />
             </Link>
             <Link
               href="/"
               className="bg-[#1f1e17] rounded-full p-3 hover:bg-[#292823] transition-all duration-300"
             >
               <FaLinkedinIn />
             </Link>
             <Link
               href="/"
               className="bg-[#1f1e17] rounded-full p-3 hover:bg-[#292823] transition-all duration-300"
             >
               <FaTwitter />
             </Link>
           </div>
         </div>
 

    </footer>
  );
}
