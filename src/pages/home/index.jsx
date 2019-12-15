import React, { useEffect, useState } from "react";
import { Loading } from "../../ui/loading";
import { Pagination } from "../../components/pagination";
import { MoviesContainer } from "./components/movies-container";
import { movieApi } from "../../services/movie";
import { Search } from "./components/search";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [limit] = useState(18);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const upcomingMovies = await movieApi.list({ page, limit, name });
      setMovies(upcomingMovies.results);
      setLoading(false);
    }

    fetch();
  }, [limit, name, page]);

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  return (
    <div className="container d-flex flex-column">
      <Search onChange={setName} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="row justify-content-center">
            <MoviesContainer movies={movies} loading={loading} />
          </div>
          <div className="d-flex justify-content-center">
            <Pagination page={page} onPageChange={handlePageChange} />
          </div>
        </>
      )}
    </div>
  );
};

export { HomePage };
