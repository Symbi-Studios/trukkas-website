import React from "react";
import Logo from "./Logo";

const LandingPage = () => {
  return (
    <div>
        {/* nav */}
        <nav className="absolute inset-x-0 top-0 z-50 flex justify-between items-center py-6 px-8 max-w-7xl mx-auto w-full">
      
            <Logo />
            <a
            href="mailto:hello@trukkas.com"
            className="bg-[#0241E8] hover:bg-blue-700 transition-all px-8 py-3 rounded-full text-white font-medium inline-block"
            >
            Contact us
            </a>
        
        </nav>

        {/* body */}
        <main
        className="h-screen w-full relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/heroBg.png')" }}
        >
            <div className="max-w-3xl mx-auto translate-y-32 flex flex-col items-center gap-3 px-6">
                <h1 className="font-bold text-3xl md:text-6xl text-center">
                Move Goods. <br /> Faster. Smarter.
                </h1>

                <p className="font-bold text-lg text-[#131514] leading-7 text-center max-w-xl">
                Request a truck, move your goods with ease of mind.
                </p>

                <a
                className="bg-[#0241E8] hover:bg-blue-700 transition-all px-8 py-3 rounded-full text-white font-medium inline-block"
                >
                Coming soon
                </a>
            </div>
        </main>



        {/* footer */}
        <footer className="absolute w-full  -bottom-2 left-0 right-0 rounded-t-full mx-auto bg-[#0D0D0D] py-10 px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
                <p className="text-sm text-gray-400 leading-relaxed">
                11B, Pelewura Close, Apapa, <br />
                Lagos State, Nigeria
                </p>

                <div className="w-10 border-t border-gray-700" />

                <p className="text-xs text-gray-600">
                &copy; 2026 Trukkas. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
    
  );
};

export default LandingPage;