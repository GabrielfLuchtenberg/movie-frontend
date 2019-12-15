import React from "react";
import { MovieCard } from "../movie-card";
import { Loading } from "../../../../ui/loading";

const MoviesContainer = ({ movies, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {movies.map(movie => (
        <div className="col col-md-4 mb-4" key={movie.id}>
          <MovieCard key={movie.id + movie.name} movie={movie} />
        </div>
      ))}
    </>
  );
};

export { MoviesContainer };
