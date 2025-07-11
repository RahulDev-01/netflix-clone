import React, { useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiDate] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  // Fetch video data from your serverless API
useEffect(() => {
  fetch(`/api/tmdb?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched API Data:", data);  // Log the data
      setApiDate(data);
    })
    .catch((err) => console.error("Error fetching data:", err));
}, [id]);


  return (
    <div className="h-screen flex flex-col content-center justify-center items-center relative">
      <Link
        onClick={() => {
          navigate(-2);  // Go back to the previous page
        }}
        className="absolute top-[30px] left-[20px] w-[50px] cursor-pointer text-[40px]"
      >
        <IoArrowBackCircleSharp />
      </Link>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        allowFullScreen
        frameBorder="0"
        className="h-[] w-[90%] rounded-[10px] h-[90%]"
      ></iframe>
      <div className="flex items-center justify-between w-[90%]">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
