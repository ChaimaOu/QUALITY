"use client";
import { useRouter } from 'next/navigation';
export default function ContactUsForm() {
  const router = useRouter();
  

  return (
    <div className="px-10 lg:px-60 py-40">

      <div className="lg:grid grid-cols-2 gap-0">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1720.4798041834608!2d-9.573745562527597!3d30.408887851037548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b70fec0a481b%3A0x76451cdae511aa26!2sAGRI%204.0!5e0!3m2!1sen!2sma!4v1720179239762!5m2!1sen!2sma"

            className="w-full h-full"
            style={{ border: "0" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full lg:w-full lg:flex flex-col justify-center bg-[#ebf7ee] py-8 px-10 lg:px-20 rounded-r-lg">
          <h4 className="text-[#ff3841] text-sm font-medium mb-2">
            Contact us
          </h4>
          <p className="text-5xl font-bold mb-4">Write a Message</p>
          <div>
            <div className="lg:grid grid-cols-2   gap-4 w-full lg:mb-4">
              <input
                type="text"
                className="py-4 px-8 rounded-lg outline-none mb-4 lg:mb-0 w-full"
                placeholder="Name"
              />
              <input
                type="text"
                className="py-4 px-8 rounded-lg outline-none mb-4 lg:mb-0 w-full"
                placeholder="Email"
              />
            </div>
            <div className="w-full mb-4">
              <textarea
                id="simpleTextarea"
                name="simpleTextarea"
                placeholder="Your Message"
                className="w-full py-4 px-8 rounded-lg outline-none"
              ></textarea>{" "}
            </div>
            <div>
              <button className="bg-[#00c552] text-white py-4 px-8 rounded-lg text-sm hover:bg-[#00c552]/80 transition-all duration-300" onClick={()=>{router.push("/contact-us")}}>
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
