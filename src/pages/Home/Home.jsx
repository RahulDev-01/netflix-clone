import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TitileCards from '../../components/TitileCards/TitileCards';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/TitileCards/Card';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import loading1 from '../../../public/images/misc/loading.gif';
import { useNavigate } from "react-router-dom";

function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [loading, setLoading] = useState(true); // <-- Initially true for back button
  const videoRef = useRef(null);
  // Navigate
  const navigate = useNavigate();

  // ⏳ Show loading for 1 second when Home mounts
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleVideoPlay = () => setIsVideoPlaying(true);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <img src={loading1} alt="Loading..." className="w-[60px]" />
        </div>
      ) : (
        <>
          <Navbar />

          <div className="relative w-full h-screen overflow-hidden">
            <img
              src="/images/herobanner.webp"
              alt="Hero Banner"
              className={`w-full h-full object-cover absolute z-10 transition-opacity duration-500 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
            />

            <video
              ref={videoRef}
              src="/herovideo0.mp4"
              className="w-full h-full object-cover absolute z-20"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onPlay={handleVideoPlay}
              onClick={handleMuteToggle}
              style={{ pointerEvents: 'none' }}
            ></video>

            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-30"></div>

            <div className="absolute bottom-[50px] left-0 p-8 text-white z-50 ml-[22px]">
              <img src="/images/N-series.webp" alt="N-series logo" className="mb-5" />
              <img src="/images/Stranger_Things.webp" alt="Stranger Things logo" className="mb-[20px]" />
              <p className="max-w-xl text-lg">
                When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
                terrifying supernatural forces and one strange little girl.
              </p>
              <div className="flex gap-[30px] mt-[20px]">
                <button className="bg-white text-[25px] text-black px-[25px] py-[8px] rounded-[5px] flex items-center gap-[10px] cursor-pointer hover:bg-[#ffffffbf]" onClick={()=>{navigate(`/player/user`);}}>
                  <FaPlay className="inline"  /> Play
                </button>
                <button className="bg-[#6d6d6eb3] text-[25px] text-white px-[25px] py-[8px] rounded-[5px] flex items-center gap-[10px] cursor-pointer hover:bg-[#6d6d6e66]">
                  <IoIosInformationCircleOutline className="inline" /> More Info
                </button>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 z-50 cursor-pointer">
              {isMuted ? (
                <BiVolumeMute size={30} color="white" onClick={handleMuteToggle} />
              ) : (
                <BiVolumeFull size={30} color="white" onClick={handleMuteToggle} />
              )}
            </div>
          </div>

          {/* Cards */}
          <TitileCards />
          <div>
            <Card title="Only on Netflix" category="popular" setLoading={setLoading} />
            <Card title="Upcoming" category="upcoming" setLoading={setLoading} />
            <Card title="Blockbuster Movies" category="top_rated" setLoading={setLoading} />
            <Card title="Top picks for you" category="now_playing" setLoading={setLoading} />
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default Home;