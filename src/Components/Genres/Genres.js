import axios from "axios";
import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";

const Genres = ({
  type,
  setPage,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(`
        https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };

    // eslint-disable-next-line
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setGenres([...genres, genre]);
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
  };

  return (
    <div>
      {selectedGenres.map((selected) => (
        <Chip
          label={selected.name}
          style={{ margin: 2 }}
          clickable
          size="small"
          key={selected.id}
          color="primary"
          onDelete={() => handleRemove(selected)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          label={genre.name}
          style={{ margin: 2 }}
          clickable
          size="small"
          key={genre.id}
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
