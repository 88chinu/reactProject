import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const GENIUS_API_KEY = "PASTE_YOUR_GENIUS_API_KEY_HERE";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [result, setResult] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const detectCategory = (language) => {
    if (language === "hi" || language === "ur") {
      return "🎬 Bollywood";
    }
    return "🎥 Hollywood";
  };

  const searchLyrics = async () => {
    if (!artist || !song) {
      setError("Please enter artist and song name");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);
    setCategory("");

    try {
      const res = await axios.get(
        "https://api.genius.com/search",
        {
          params: { q: `${artist} ${song}` },
          headers: {
            Authorization: `Bearer ${GENIUS_API_KEY}`,
          },
        }
      );

      const hit = res.data.response.hits[0];

      if (!hit) {
        setError("Song not found");
      } else {
        const lang = hit.result.language || "en";

        setCategory(detectCategory(lang));

        setResult({
          title: hit.result.title,
          artist: hit.result.primary_artist.name,
          url: hit.result.url,
          image: hit.result.song_art_image_url,
        });
      }
    } catch (err) {
      setError("Error fetching song data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>🎵 Lyrics Finder</h1>

      <input
        className="inp"
        placeholder="Artist name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <input
        className="inp"
        placeholder="Song name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />

      <br /><br />

      <button className="btn" onClick={searchLyrics}>
        Search
      </button>

      <hr />

      {loading && <p>🔍 Searching...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h2>{result.title}</h2>
          <p>by {result.artist}</p>
          <p><strong>{category}</strong></p>

          <img src={result.image} alt="song" width="200" />

          <br /><br />

          <a
            href={result.url}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View Lyrics on Genius
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
