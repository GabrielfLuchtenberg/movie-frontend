import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { movieApi } from "../../services/movie";
import { Loading } from "../../ui/loading";
import { useParams, useHistory } from "react-router-dom";
import { formatGenre } from "../../utils/format-genre";
import "./styles.scss";

const MovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const movieFromApi = await movieApi.get({ id });
      setMovie(movieFromApi);
      setLoading(false);
    };

    fetch();
  }, [id]);

  function goBackToList() {
    history.push("/");
  }
  if (loading) {
    return <Loading />;
  }
  const genres = formatGenre(movie.genres);
  return (
    <div className="container">
      <div className="nav-container mt-3 mb-3">
        <button
          className="btn btn-primary"
          onClick={goBackToList}
          data-testid="go-to-list"
        >
          <i class="fas fa-long-arrow-alt-left"></i>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </button>
      </div>
      <div className="movie-container d-flex flex-column flex-md-row align-items-md-start">
        <img
          src={movie.posters[3]}
          alt={`${movie.name} poster`}
          className="img-fluid"
        />
        <div className="card movie-info img-responsive">
          <div className="card-body">
            <h1 className="card-title">
              {movie.name}
              <small>{movie.release_date}</small>
            </h1>
            <small>{genres}</small>

            <p className="mt-2">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetails };
