import React, { SFC, useEffect, useState } from "react";
import Api from "../../Api/Api";

const Watchlist: SFC<{}> = () => {
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<any[]>([]);
  function handleSearch({
    target
  }: {
    target: { name: string; value: string };
  }) {
    setSearch(target.value);
  }

  function handleSubmit() {
    Api.search(search).then(response => {
      const movies = response.results.sort(
        (a: any, b: any) => b.vote_count - a.vote_count
      );
      setMovies(movies);
    });
  }

  function handleAdd(movie: any) {
    const movieFormat = {
      title: movie.original_title,
      rating: movie.vote_average,
      description: movie.overview
    };
    console.log(movie, movieFormat);
    return fetch("http://localhost:8000/watchlist/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTYxMjgzNTI4LCJqdGkiOiI5ZWQ5YTcxZThhNzc0ZWEzODFhN2RjYzU5ZjQxZWNiMSIsInVzZXJfaWQiOjN9.CXURqhKr-wxNdYKINPBTwL3YSaHVokpcS0oGAxaXGBo"
      },
      body: JSON.stringify({
        movie: movieFormat,
        user: "http://localhost:8000/user/1"
      })
    })
      .then(response => response.json())
      .then(response => console.log({ response }));
  }

  useEffect(() => {}, []);
  return (
    <div>
      <input
        type="search"
        name="search"
        value={search}
        onChange={event => handleSearch(event)}
      />
      <button type="button" onClick={() => handleSubmit()}>
        search
      </button>
      <ul>
        {movies.map(movie => (
          <li>
            <h5>{movie.original_title}</h5>
            <img
              style={{ maxWidth: 200 }}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <button onClick={() => handleAdd(movie)}>add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
