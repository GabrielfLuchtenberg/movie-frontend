import React, { useEffect, useState } from "react";
import { Loading } from "../../ui/loading";
import { api } from "../../api";
import { Pagination } from "../../components/pagination";
import { MoviesContainer } from "./components/movies-container";
import { Search } from "./components/search";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [limit] = useState(18);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const response = await api.get("/v1/movie/upcoming", {
        params: { page, limit, name }
      });
      const { data } = response;
      setMovies(data.results);
      setLoading(false);
    }

    fetch();
  }, [limit, name, page]);

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  return (
    <div className="container home">
      <div className="row">
        <Search onChange={setName} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="row">
            <MoviesContainer movies={movies} loading={loading} />
          </div>
          <div className="row">
            <div className="col-12">
              <Pagination page={page} onPageChange={handlePageChange} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { HomePage };
