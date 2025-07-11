import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, category, setLoading }) {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  // TMDB API Key (replace with your actual key)
  const apiKey = "996df9b7983b9c7756d24f9574a94868";

  // TMDB API options
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  // Fetch data from TMDB API
  useEffect(() => {
    // Construct the URL dynamically
    const url = `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1&api_key=${apiKey}`;

    // Fetch data with error handling
    fetch(url, options)
      .then((res) => {
        // Check if the response is OK
        if (!res.ok) {
          console.error("Error fetching data:", res.status);
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        // Attempt to parse the response as JSON
        return res.json();
      })
      .then((res) => {
        // Log the response data for debugging
        console.log("Fetched Data:", res);
        
        // Store the data in state if response is valid
        setApiData(res.results);
      })
      .catch((err) => {
        // Handle any errors (network, response parsing, etc.)
        console.error("Error fetching data:", err);
      });
  }, [category]); // Dependency array ensures the effect runs when 'category' changes

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
          {apiData.length > 0 ? (
            apiData.map((card, index) => (
              <div
                key={card.id} // Ensure each card has a unique key (card.id instead of index)
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
            ))
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
