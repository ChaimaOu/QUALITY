import React from 'react'

export default function Input({placeholder,children}:{placeholder:string,children:React.ReactNode}) {
  return (
<div className="relative w-full mt-10">
  <input
    type="text"
    className="text-black font-jakarta font-normal text-lg rounded-full border-2 border-[#5dca5b] px-4 py-3 outline-none w-full "
    placeholder={placeholder}
  />
  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 font-jakarta font-normal text-lg bg-[#5dca5b] text-white rounded-full hover:bg-[#52b351] transition-all duration-300 px-4 py-2">
    {children}
  </button>
</div>

  )
}
