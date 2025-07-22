import React from 'react';
import personImg from '../assets/person.png';

const Hero = () => {
  return (
    <section className="relative bg-[#0054A6] py-32 sm:py-24 -mt-16 overflow-hidden">
      {/* Top left circle */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#FFA987] rounded-full -translate-x-1/2 -translate-y-1/2 animate-fade-in-out"></div>

      {/* Bottom right circle */}
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
        <div className="w-60 h-60 bg-[#FFE25B] rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:flex md:flex-row flex-col-reverse items-center justify-between relative z-10">
        {/* Left Side Content */}
        <div className="text-white md:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0">
          <p className="text-sm sm:text-base font-bold tracking-wide">
            Software Recruitment Specialists
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] via-[#FF9472] to-[#FFC371] drop-shadow-[0_1px_4px_rgba(255,112,67,0.75)]">
            Elevate your career
          </h1>

          {/* Search Box */}
          <div className="mt-6 flex w-full max-w-md mx-auto md:mx-0 bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="E.g. networking"
              className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[#FFE25B] text-[#000] font-semibold px-6 py-3 text-sm hover:bg-yellow-300 transition">
              Search jobs
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <img
            src={personImg}
            alt="Person"
            className="w-64 sm:w-72 md:w-full max-w-sm rounded-[30px] object-cover shadow-lg"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
