import React, { useEffect, useState } from "react";
import { movieApi } from "../../services/movie";
import { Loading } from "../../ui/loading";
import { useParams, useHistory } from "react-router-dom";

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
  return (
    <>
      <button onClick={goBackToList} data-testid="go-to-list">
        Go back
      </button>
      <h1>Movie:</h1>
      <span>{movie.name}</span>
    </>
  );
};

export { MovieDetails };
