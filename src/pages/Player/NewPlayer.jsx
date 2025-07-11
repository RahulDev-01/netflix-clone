import React, { useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "", // Fixed typo from 'typeof' to 'type'
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_API_KEY_HERE', // Replace with actual API token
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        console.log("API Response:", res); // Debugging the API response
        setApiData(res.results[0] || {}); // Set the first video from the results, or an empty object if no results
      })
      .catch(err => console.error("Error fetching video data:", err));
  }, [id]);

  // Debug: Check if the key exists
  console.log("API Data Key:", apiData.key);

  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <button onClick={() => navigate(-1)} className="absolute top-[30px] left-[20px] w-[50px] cursor-pointer text-[40px]">
        <IoArrowBackCircleSharp />
      </button>
      {apiData.key ? (
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          allowFullScreen
          frameBorder="0"
          className="w-[90%] rounded-[10px] h-[90%]"
        ></iframe>
      ) : (
        <p>Loading video...</p> // Show loading message if key is not available yet
      )}
      <div className="flex items-center justify-between w-[90%] mt-4">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
