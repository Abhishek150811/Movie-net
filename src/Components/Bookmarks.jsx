import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState({
    movies: {},
    tv: {},
  });

  useEffect(() => {
    const movies = localStorage.getItem("movie") || "{}";
    const tv = localStorage.getItem("tv") || "{}";

    setBookmarks({
      movies: JSON.parse(movies),
      tc: JSON.parse(tv),
    });
  }, []);

  return (
    <div className="bookmark-box">
      <div className="movie-bookmark">
        <h1>Movies</h1>
        <div>
          {Object.keys(bookmarks.movies)}
        </div>
      </div>

      <div className="tv-bookmark"></div>
    </div>
  );
}
