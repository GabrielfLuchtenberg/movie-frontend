import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const MovieCard = ({ movie }) => {
  const history = useHistory();
  function accessMovie() {
    history.push(`movie/${movie.id}`);
  }

  return (
    <div className="card card__movie" data-testid="movie" onClick={accessMovie}>
      <img src={movie.posters[1]} alt={`${movie.name} poster`} />
      <div className="card-body">
        <div className="card-title">
          <span onClick={accessMovie} data-testid="movie-name">
            {movie.name}
          </span>
        </div>
        <div className="card-text card-text--bottom">
          <span>{movie.release_date}</span>
        </div>
      </div>
    </div>
  );
};

export { MovieCard };
