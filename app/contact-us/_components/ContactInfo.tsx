import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';

export default function ContactInfo() {
  return (
    <motion.div className="w-full lg:w-1/5 bg-white p-4 rounded-xl shadow-md  lg:flex-col justify-evenly hidden md:flex text-center text-xs lg:text-sm font-sans"
    initial={{opacity:0, x:100}}
    animate={{opacity:1,x:[-20,10,-10,0]}}
    transition={{duration:1, delay:1}}>
      <div className="w-1/3 lg:w-full flex flex-col items-center lg:justify-between py-2 px-6 lg:border-b-2 border-black-gray-500 ">
        {/* <IoCallOutline className="text-6xl" /> */}
        <svg
          width="52"
          height="51"
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9827 7.24194C34.9247 8.03321 37.6071 9.5836 39.7614 11.7378C41.9156 13.8921 43.466 16.5745 44.2573 19.5166"
            stroke="#0A1A3C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.1866 13.95C31.9515 14.4247 33.5606 15.3548 34.8529 16.6471C36.1451 17.9394 37.0752 19.5485 37.55 21.3133"
            stroke="#0A1A3C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.4625 25.6413C19.2621 29.3218 22.2449 32.2917 25.933 34.0755C26.2031 34.2034 26.5018 34.2587 26.7998 34.2359C27.0977 34.213 27.3846 34.1129 27.632 33.9453L33.0639 30.3252C33.3038 30.165 33.5799 30.0672 33.8671 30.0405C34.1544 30.0139 34.4437 30.0592 34.709 30.1725L44.8699 34.5284C45.215 34.675 45.5032 34.9298 45.691 35.2544C45.8788 35.579 45.9561 35.9558 45.9112 36.328C45.5895 38.8409 44.3631 41.1504 42.4616 42.8242C40.56 44.498 38.1135 45.4214 35.5802 45.4216C27.7558 45.4216 20.2518 42.3134 14.7191 36.7807C9.18637 31.248 6.07813 23.744 6.07812 15.9195C6.07836 13.3864 7.00185 10.9402 8.67571 9.0389C10.3496 7.1376 12.659 5.91156 15.1717 5.59033C15.544 5.54543 15.9208 5.6227 16.2454 5.81049C16.5699 5.99829 16.8247 6.28645 16.9713 6.63158L21.3307 16.8011C21.4428 17.0639 21.4883 17.3503 21.4632 17.6348C21.4381 17.9194 21.3431 18.1934 21.1867 18.4324L17.577 23.9476C17.4132 24.1959 17.3165 24.4825 17.2964 24.7794C17.2764 25.0762 17.3336 25.3732 17.4625 25.6413V25.6413Z"
            stroke="#0A1A3C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="pt-2">
          <h3 className="text-base font-semibold">Téléphone</h3>
          <Link href="tel:+212(0) 528 81 65 45" className="text-base">
            +212(0) 528 81 65 45
          </Link>
        </div>
      </div>
      <div className="w-1/3 lg:w-full flex flex-col items-center lg:justify-between py-2 px-6 lg:border-b-2 border-black-gray-500">
        {/* <IoMailOutline className="text-6xl" /> */}
        <svg
          width="52"
          height="51"
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_124_284)">
            <path
              d="M48.95 5.94971H3.05C1.64172 5.94971 0.5 7.09133 0.5 8.49971V42.4997C0.5 43.908 1.64162 45.0497 3.05 45.0497H48.95C50.3583 45.0497 51.5 43.9081 51.5 42.4997V8.49971C51.5 7.09143 50.3584 5.94971 48.95 5.94971ZM49.8 42.4998C49.8 42.9692 49.4195 43.3497 48.95 43.3497H3.05C2.58054 43.3497 2.20003 42.9692 2.20003 42.4998V8.49971C2.20003 8.03025 2.58054 7.64974 3.05 7.64974H48.95C49.4195 7.64974 49.8 8.03025 49.8 8.49971V42.4998Z"
              fill="#0A1A3C"
            />
            <path
              d="M47.324 9.35314C47.0994 9.33351 46.8762 9.40394 46.7036 9.54897L27.094 26.0219C26.4616 26.5535 25.5385 26.5535 24.9061 26.0219L5.29666 9.54887C5.06407 9.35363 4.74492 9.29725 4.45954 9.40105C4.17416 9.50484 3.96578 9.75307 3.91299 10.0522C3.86019 10.3513 3.97096 10.6558 4.20355 10.8511L23.813 27.3232C25.0769 28.3873 26.9233 28.3873 28.1872 27.3232L47.7966 10.8512C47.9693 10.7062 48.0773 10.4986 48.0969 10.274C48.1165 10.0494 48.0461 9.82618 47.9011 9.65356C47.7563 9.48074 47.5487 9.37276 47.324 9.35314Z"
              fill="#0A1A3C"
            />
            <path
              d="M16.8483 27.2057C16.5474 27.1386 16.2338 27.2396 16.0286 27.4697L4.12856 40.2197C3.91321 40.4402 3.83412 40.7602 3.92197 41.0556C4.00983 41.3512 4.25079 41.5759 4.55161 41.643C4.85253 41.7101 5.1661 41.6091 5.37129 41.379L17.2713 28.629C17.4867 28.4085 17.5658 28.0886 17.4779 27.7931C17.3901 27.4977 17.1492 27.2729 16.8483 27.2057Z"
              fill="#0A1A3C"
            />
            <path
              d="M35.9714 27.4697C35.7663 27.2396 35.4526 27.1386 35.1517 27.2057C34.8508 27.2729 34.6099 27.4977 34.5221 27.7931C34.4342 28.0887 34.5133 28.4085 34.7287 28.629L46.6287 41.3791C46.9514 41.7096 47.479 41.7219 47.8167 41.4067C48.1545 41.0916 48.1788 40.5644 47.8714 40.2196L35.9714 27.4697Z"
              fill="#0A1A3C"
            />
          </g>
          <defs>
            <clipPath id="clip0_124_284">
              <rect
                width="51"
                height="51"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="pt-2">
          <h3 className="text-base font-semibold">Email</h3>
          <Link href="mailto:contact@qualitymar.com" className="text-base">
            contact@qualitymar.com
          </Link>
        </div>
      </div>
      <div className="w-1/3 lg:w-full flex flex-col  items-center lg:justify-between py-2 px-6 ">
        {/* <IoLocationOutline className="text-6xl" /> */}
        <svg
          width="52"
          height="51"
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6562 46.2188H40.3438"
            stroke="#0A1A3C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26 27.0938C27.6908 27.0938 29.3123 26.4221 30.5078 25.2266C31.7033 24.031 32.375 22.4095 32.375 20.7188C32.375 19.028 31.7033 17.4065 30.5078 16.2109C29.3123 15.0154 27.6908 14.3438 26 14.3438C24.3092 14.3438 22.6877 15.0154 21.4922 16.2109C20.2966 17.4065 19.625 19.028 19.625 20.7188C19.625 22.4095 20.2966 24.031 21.4922 25.2266C22.6877 26.4221 24.3092 27.0938 26 27.0938V27.0938Z"
            stroke="#0A1A3C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M41.9375 20.7188C41.9375 35.0625 26 46.2188 26 46.2188C26 46.2188 10.0625 35.0625 10.0625 20.7188C10.0625 16.4919 11.7416 12.4381 14.7305 9.44924C17.7193 6.46037 21.7731 4.78125 26 4.78125C30.2269 4.78125 34.2807 6.46037 37.2695 9.44924C40.2584 12.4381 41.9375 16.4919 41.9375 20.7188V20.7188Z"
            stroke="#0A1A3C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="pt-2">
          <h3 className="text-base font-semibold">Adresse</h3>
          <p className="text-base">
            Imm Annakhil, Sidi Bibi, Chtouka Ait Baha, Maroc
          </p>
        </div>
      </div>
    </motion.div>
  );
}
