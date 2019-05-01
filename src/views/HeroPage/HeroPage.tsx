import React, { useState, useEffect, SFC, Fragment } from "react";
import Sort from "../../components/Sort/Sort";
import MediaGrid from "../../components/MediaGrid/MediaGrid";
import Api from "../../Api/Api";
import { IHistory, ILocation } from "../../types/interfaces";

const HeroPage: SFC<{ history: IHistory; location: ILocation }> = ({
  history,
  location
}) => {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState("rating");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);

  function handleSort(item: string) {
    const newOrder = order === "asc" ? "desc" : "asc";
    setSort(item);
    setOrder(newOrder);
  }

  useEffect(() => {
    function fetchAll() {
      // Remove the trailing slash to match the url schema from Api
      const path = location.pathname;
      const url = `${path.substring(
        1,
        path.length
      )}?page=${page}&sort=${sort}&order=${order}`;
      return Api.get(url).then(({ data: { data } }) => {
        setMovies(data);
      });
    }
    fetchAll();
  }, [sort, page, location, order]);
  return (
    <Fragment>
      <Sort sort={handleSort} />
      <MediaGrid movies={movies} history={history} location={location} />
    </Fragment>
  );
};

export default HeroPage;
