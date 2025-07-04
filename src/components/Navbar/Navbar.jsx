import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell, FaAngleDown } from "react-icons/fa";
import { logout } from '../../firebase';

function Navbar() {
  const navEle = [
    { name: "Home" },
    { name: "Tv Shows" },
    { name: "Movies" },
    { name: "New & Popular" },
    { name: "My List" },
    { name: "Browse by Language" },
  ];

  // State to track if navbar should have background or not
  const [hasBg, setHasBg] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // When user scrolls down more than 50px, show black bg, else transparent
      if (window.scrollY > 50) {
        setHasBg(true);
      } else {
        setHasBg(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-around items-center mt-[px] gap-[350px] transition-colors duration-300
        ${hasBg ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className='flex gap-[30px] items-center'>
        <img src="/public/navLogo.png" alt="logo" className='h-[80px] cursor-pointer' />
        <ul className='flex gap-[30px] cursor-pointer'>
          {navEle.map((n, i) => (
            <li key={i}>{n.name}</li>
          ))}
        </ul>
      </div>

      {/* Right side */}
      <div className='flex items-center gap-[15px]'>
        <IoSearchSharp className='text-[20px] cursor-pointer' />
        <p>Children</p>
        <FaRegBell className='text-[20px] cursor-pointer' />

        {/* Group wrapper: image + dropdown */}
        <div className="relative group">
          {/* Avatar + angle down icon */}
          <div className="flex items-center gap-[4px] cursor-pointer">
            <img
              src="/public/images/users/4.png"
              alt="user"
              className='h-[40px] rounded-[5px]'
            />
            <FaAngleDown />
          </div>

          {/* Dropdown: stays on hover of image OR dropdown */}
          <div className='absolute right-0 top-[100%] bg-[#191919] text-[14px] p-[20px] underline z-[50] hidden group-hover:block w-[200px]'>
            <p onClick={() => { logout() }} className='cursor-pointer'>Sign Out From Netflix</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
