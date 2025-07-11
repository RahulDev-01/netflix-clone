import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";



function Footer() {

  const icons =[
    {icon:<FaFacebookF />},
    {icon:<FaInstagram />},
    {icon:<FaTwitter />},
    {icon:<FaYoutube />},
  ]
const li1 =[
  {name:"Audio Desciption"},
  {name:"Investor Relations"},
  {name:"Legal Notices"},

]
const li2 =[
  {name:"Help Centre"},
  {name:"Jobs"},
  {name:"Cookie Preferences"},

]
const li3 =[
  {name:"Gift cards"},
  {name:"Terms of Use"},
  {name:"Corparate Information"},

]

const li4 =[
  {name:"Media Centre"},
  {name:"privacy"},
  {name:"Contact IUs"},

]

  return (
   <>
   <footer className='h-[300px] '>
    <div className='flex gap-[10px]  ml-[255px] ]'>
    {
      icons.map((icon,index)=>{
       return <span className='text-3xl mt-[50px] cursor-pointer hover:scale-120'>{icon.icon}</span>
      })
    }
    </div>
    <div className='flex gap-[100px]  ml-[263px]'>
    <div className='flex flex-col mt-[50px] gap-[15px]  mb-[15px]'>
    {
      li1.map((icon,index)=>{
       return <span className='text-[20px] font-medium cursor-pointer hover:scale-110'>{icon.name}</span>
      })
    }
    </div>
    <div className='flex flex-col mt-[50px] gap-[15px] '>
    {
      li2.map((icon,index)=>{
       return <span className='text-[20px] font-medium cursor-pointer hover:scale-105'>{icon.name}</span>
      })
    }
    </div>
    <div className='flex flex-col mt-[50px] gap-[15px] '>
    {
      li3.map((icon,index)=>{
       return <span className='text-[20px] font-medium cursor-pointer hover:scale-105'>{icon.name}</span>
      })
    }
    </div>
    <div className='flex flex-col mt-[50px] gap-[15px] '>
    {
      li4.map((icon,index)=>{
       return <span className='text-[20px] font-medium cursor-pointer hover:scale-105'>{icon.name}</span>
      })
    }
    </div>
    </div>
    <p className='mt-[10px] flex items-center align-middle gap-0.5 ml-[262px] text-[17px]'><FaRegCopyright className='inline mb-[4.8px]'/> 1997-2025 Netflix,Inc.</p>
   </footer>
   </>
  )
}

export default Footer