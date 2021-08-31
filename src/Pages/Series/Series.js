import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import Genres from "../../Components/Genres/Genres";
import useGenre from "../../hooks/useGenre";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  let genreforURL = useGenre(selectedGenres);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    setSeries(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <span className="pageTitle">Series</span>
      <Genres
        setPage={setPage}
        type="tv"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <div className="ContentWrapper">
        {series.map((s) => (
          <SingleContent
            key={s.id}
            id={s.id}
            poster={s.poster_path}
            title={s.name}
            date={s.first_air_date}
            media_type="tv"
            vote_average={s.vote_average}
          />
        ))}
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};

export default Series;
