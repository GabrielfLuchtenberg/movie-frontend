const formatGenre = (genres = []) => {
  return genres.reduce((prev, genre, idx) => {
    if (idx > 0) {
      return `${genre.name}, ${prev}`;
    }
    return genre.name;
  }, "");
};

export { formatGenre };
