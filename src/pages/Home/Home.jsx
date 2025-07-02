import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TitileCards from '../../components/TitileCards/TitileCards';

function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hero Image */}
        <img
          src="/images/herobanner.webp"
          alt="herobanner"
          className="w-full h-full object-cover"
        />

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>

        {/* Navbar (on top of image & gradient) */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Text and Logo Content */}
        <div className="absolute bottom-[50px] left-0 p-8 text-white z-20 ml-[22px]">
          <img src="/images/N-series.webp" alt="N-series logo" className="mb-5" />
          <img src="/images/Stranger_Things.webp" alt="Stranger Things logo" className="mb-[20px]" />
          <p className="max-w-xl text-lg">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
            terrifying supernatural forces and one strange little girl.
          </p>
          <div className="flex gap-[30px] mt-[20px]">
            <button className="bg-white text-[25px] text-black px-[25px] py-[8px] rounded-[5px] flex items-center gap-[10px] cursor-pointer hover:bg-[#ffffffbf]">
              <FaPlay className="inline" /> Play
            </button>
            <button className="bg-[#6d6d6eb3] text-[25px] text-white px-[25px] py-[8px] rounded-[5px] flex items-center gap-[10px] cursor-pointer hover:bg-[#6d6d6e66]">
              <IoIosInformationCircleOutline className="inline" /> More Info
            </button>
          </div>
        </div>

        {/* Title Cards Section (Overlaying on Hero Section) */}
        
        
      </div>
          <TitileCards />
    </>
  );
}



export default Home