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

  const v4Token = import.meta.env.VITE_TMDB_V4_TOKEN;
  const v3Key = import.meta.env.VITE_TMDB_API_KEY;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: v4Token ? `Bearer ${v4Token}` : undefined,
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US${v3Key ? `&api_key=${v3Key}`: ""}`, options)
    .then(res => res.json())
    .then(async (res) => {
      setApiDate(res.results[0]);
      try { await upsertContinueWatching(id, {}); } catch (_) {}
    })
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
        className=" h-[] w-[90%] rounded-[10px] h-[90%]"
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
