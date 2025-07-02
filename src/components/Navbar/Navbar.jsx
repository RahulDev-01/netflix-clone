import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const navEle = [
    { name: "Home" },
    { name: "Tv Shows" },
    { name: "Movies" },
    { name: "New & Popular" },
    { name: "My List" },
    { name: "Browse by Language" },
  ];

  return (
    <nav className='flex justify-around items-center mt-[3px] gap-[350px] bg-transparent relative z-10'>
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
            <p>Sign Out From Netflix  </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
