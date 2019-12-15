import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const MovieCard = ({ movie }) => {
  const history = useHistory();
  function accessMovie() {
    history.push(`movie/${movie.id}`);
  }

  const formatGenre = genres =>
    genres.reduce((prev, genre, idx) => {
      if (idx > 0) {
        return `${genre.name}, ${prev}`;
      }
      return genre.name;
    }, "");

  return (
    <div className="card__movie" data-testid="movie" onClick={accessMovie}>
      <img src={movie.posters[3]} alt={`${movie.name} poster`} />
      <div className="opacity-container">
        <div className="card-body">
          <div className="card-title">
            <span onClick={accessMovie} data-testid="movie-name">
              {movie.name}
            </span>
          </div>
          <div className="card-text card-text--release-data">
            <span>{movie.release_date}</span>
          </div>
          <div className="card-text card-text--genres">
            <span>{formatGenre(movie.genres)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieCard };
