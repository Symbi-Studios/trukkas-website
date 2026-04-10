import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen w-full relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/heroBg.png')" }}
    >
      <div className="max-w-3xl mx-auto translate-y-44 flex flex-col items-center gap-3 px-6">
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
    </section>
  );
};

export default Hero;