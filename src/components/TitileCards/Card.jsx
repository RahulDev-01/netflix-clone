import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, category, setLoading }) {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  // TMDB API Auth
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTZkZjliNzk4M2I5Yzc3NTZkMjRmOTU3NGE5NDg2OCIsIm5iZiI6MTc1MTYwNzMwMy45NDksInN1YiI6IjY4Njc2ODA3OWVhMDVhMGE1MjVlMzY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZGplHP5zevDM0uTjAXtiuqNrwALpg_DCyM4FykYASE",
    },
  };

  // Fetch data
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  // Handle card click with loading and delay
  const handleCardClick = (id) => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/player/${id}`);
    }, 1000); // Delay for 1 second so spinner can be seen
  };

  return (
    <div className="h-[500px] ">
      <h2 className="mt-[30px] ml-[62px] font-bold text-2xl text-white">
        {title || "Trending Now"}
      </h2>

      <div className="overflow-x-scroll scrollbar-hide  h-[420px] overflow-y-hidden">
        <div className="flex gap-[50px] mt-[30px] ml-[28px] mb-[100px] w-[6000px] px-[20px]">
          {apiData.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card.id)}
              className="group relative overflow-hidden transition-all duration-300 ease-in-out w-[460px] hover:w-[900px] cursor-pointer"
            >
              <div className="relative w-full h-[320px] transition-all">
                <img
                  src={`https://image.tmdb.org/t/p/original/${card.backdrop_path}`}
                  alt={card.original_title}
                  className="h-full w-full rounded-[4px] object-cover transition-all duration-300 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <span className="text-[12px] font-normal text-white block">
                    {card.overview}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-[20px] font-bold text-white block">
                  {card.original_title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
