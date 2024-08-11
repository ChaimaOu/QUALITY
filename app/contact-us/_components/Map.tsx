import React from 'react'

export default function Map() {
  return (
    <div className="w-full h-0 pb-[50%] lg:pb-[20%] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.9630355209883!2d-9.571765151129044!3d30.408790618982138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b70fec0a481b%3A0x76451cdae511aa26!2sAGRI%204.0!5e0!3m2!1sen!2sma!4v1720690290572!5m2!1sen!2sma"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}