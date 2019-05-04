import React, { useState, useEffect, SFC, Fragment } from "react";
import Sort from "../../components/Sort/Sort";
import MediaGrid from "../../components/MediaGrid/MediaGrid";
import Api from "../../Api/Api";
import { IHistory, ILocation, IData, IMovie } from "../../types/interfaces";
import Paginate from "../../components/paginate/Paginate";

const HeroPage: SFC<{ history: IHistory; location: ILocation }> = ({
  history,
  location
}) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [sort, setSort] = useState("rating");
  const [order, setOrder] = useState("asc");
  const [current_page, setPage] = useState(1);
  const [previous_page, setPreviousPage] = useState(1);
  const [next_page, setNextPage] = useState(2);
  const [count, setCount] = useState(0);

  function handleSort(item: string) {
    const newOrder = order === "asc" ? "desc" : "asc";
    setSort(item);
    setOrder(newOrder);
  }

  function handleClick(page: number) {
    setPage(page);
  }

  useEffect(() => {
    function fetchAll() {
      // Remove the trailing slash to match the url schema from Api
      const path = location.pathname;
      const url = `${path.substring(
        1,
        path.length
      )}?page=${current_page}&sort=${sort}&order=${order}`;
      return Api.get(url).then(
        ({ data, current_page, next_page, previous_page, count }) => {
          console.log(data, current_page, next_page, previous_page, count);
          setMovies(data);
          setPage(current_page);
          setNextPage(next_page);
          setPreviousPage(previous_page);
          setCount(count);
        }
      );
    }
    fetchAll();
  }, [sort, current_page, location, order]);
  return (
    <Fragment>
      <Sort sort={handleSort} />
      <MediaGrid movies={movies} history={history} location={location} />
      <Paginate
        count={count}
        current_page={current_page}
        next_page={next_page}
        previous_page={previous_page}
        onClick={handleClick}
      />
    </Fragment>
  );
};

export default HeroPage;
