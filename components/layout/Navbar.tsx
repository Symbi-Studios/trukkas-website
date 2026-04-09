'use client'

import Image from "next/image";

export default function Navbar() {
  return (
    // 'absolute' takes it out of the document flow, 'inset-x-0' makes it full width
    // 'z-50' ensures it stays above your hero image or background
    <nav className="absolute inset-x-0 top-0 z-50 flex justify-between items-center py-6 px-8 max-w-7xl mx-auto w-full">
      
      <Image src={'/logoWhite.png'} alt="trukkas" width={129} height={33} />

      <a
          href="mailto:hello@trukkas.com"
          className="bg-[#0241E8] hover:bg-blue-700 transition-all px-8 py-3 rounded-full text-white font-medium inline-block"
        >
          Contact us
        </a>
      
    </nav>
  );
}
