import React from 'react'
import card_data from '../../../public/images/films/top10/Cards_data'   
import { BiCategory } from 'react-icons/bi'
function TitileCards({title}) {
  
  return (
    <>
    <h2 className='mt-[40px] ml-[62px] font-bold text-2xl'>
      {title?title:"Trending Now"}</h2>
    <div className=' w-auto    overflow-x-scroll  scrollbar-hide'>
    <div className='flex gap-[50px] mt-[30px] ml-[50px] mb-[50px] w-[4000px]'>
        {card_data.map((card,index)=>{
            return(
                <div key={index} className=' h-[320px] relative w-[252px] ml-[15px]    '>
                    <img src={card.image} alt="" className='  w-[252px] h-[320px] rounded-[4px]  object-cover'/>
                    <span
                    className='text-[6.25rem] absolute top-[190px] left-[-21px] font-bold text-black text-shadow-all-sides '

                    >{card.name}</span>
                    
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default TitileCards