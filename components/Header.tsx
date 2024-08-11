import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbar from "./items/Navbar";
import SideBar from "./items/SideBar";


export default function Header() {
  return (
    <header className="shadow-md w-full">
      <nav className=" flex justify-between items-center px-10 lg:px-20 p-6 bg-white">
        <div>
          <Link href="/" prefetch={true}>
            <Image src="/logo.svg" alt="logo" width={180} height={180} />
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
        <div className="lg:hidden h-full px-8">
          <SideBar />
        </div>
      </nav>

    </header>
  );
}