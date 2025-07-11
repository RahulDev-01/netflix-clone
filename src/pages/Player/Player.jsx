import React, { useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";

function Player() {

  const {id}=useParams();
  const navigate = useNavigate()

  const [apiData , setApiDate]= useState({
    name:"",
    key:"",
    published_at:"",
    typeof :"",
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTZkZjliNzk4M2I5Yzc3NTZkMjRmOTU3NGE5NDg2OCIsIm5iZiI6MTc1MTYwNzMwMy45NDksInN1YiI6IjY4Njc2ODA3OWVhMDVhMGE1MjVlMzY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZGplHP5zevDM0uTjAXtiuqNrwALpg_DCyM4FykYASE'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiDate(res.results[0]))
  .catch(err => console.error(err));
},[])





  return (
    <div className="h-screen flex flex-col content-center  justify-center items-center relative">
      <Link onClick={()=>{useNavigate(-2)}} className="absolute top-[30px] left-[20px] w-[50px] cursor-pointer text-[40px]">
        <IoArrowBackCircleSharp />
      </Link>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        allowFullScreen
        frameborder="0"
        className=" h-[] w-[90%] rounded-[10px] h-[90%]  "
        
      ></iframe>
      <div className="flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
