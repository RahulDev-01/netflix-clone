export default async function handler(req, res) {
  const tmdbApiKey = process.env.TMDB_API_KEY;
  const { category = "now_playing", page = 1 } = req.query;

  if (!tmdbApiKey) {
    console.error("TMDB API Key is missing");
    return res.status(500).json({ error: "TMDB API key is missing" });
  }

  const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${tmdbApiKey}`,
    },
  };

  try {
    const response = await fetch(url, options);

    // Check if response is ok (status 2xx)
    if (!response.ok) {
      console.error("Error fetching from TMDB API", response.status, await response.text());
      return res.status(response.status).json({ error: `Error fetching from TMDB API: ${response.status}` });
    }

    const data = await response.json();

    // Check if data contains results
    if (!data.results || data.results.length === 0) {
      console.error("No results found");
      return res.status(404).json({ error: "No results found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in fetch:", error);
    return res.status(500).json({ error: "Error fetching data from TMDB" });
  }
}
