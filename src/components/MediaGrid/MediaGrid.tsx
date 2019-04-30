import React, { Component, Fragment } from "react";
import Item from "./MediaGridItem/MediaGridItem";
import styled from "styled-components";
import { IHistory, IData, ILocation } from "../../types/interfaces";
import api from "../../api";
import styles from "./MediaGrid.module.css";
import { sortByDate, sortByNumber, sortByString } from "../../helpers/filters";
import Sort from "../Sort";

interface IProps {
  history: IHistory;
  location: ILocation;
}

interface IState {
  movies: IData[];
  ready: boolean;
  type: string;
  sort: boolean;
}

export default class MediaGrid extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      movies: [],
      type: "date",
      sort: false,
      ready: false
    };
    this.handleSort = this.handleSort.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
  }
  componentDidMount() {
    this.fetchAll();
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.fetchAll();
    }
  }

  fetchAll() {
    return api.fetchData(`${this.props.location.pathname}`).then(({ data }) => {
      const movies = sortByDate(data.data, "release_date", "asc");
      this.setState({ movies, ready: true });
    });
  }

  handleSort(type: string) {
    let movies = [...this.state.movies];
    switch (type) {
      case "rating":
        movies = sortByNumber(
          movies,
          "rating",
          this.state.sort ? "asc" : "desc"
        );
        break;
      case "name":
        movies = sortByString(
          movies,
          "title",
          this.state.sort ? "asc" : "desc"
        );
        break;
      case "date":
        movies = sortByDate(
          movies,
          "release_date",
          this.state.sort ? "asc" : "desc"
        );
        break;
    }
    return this.setState((state: IState) => ({
      movies,
      type,
      sort: !state.sort
    }));
  }

  render() {
    // need to separate top and the rest to display the grid correctly
    // const top = this.state.movies.slice(0, 4);
    // const rest = this.state.movies.slice(4);
    return (
      this.state.ready && (
        <Fragment>
          <Sort sort={this.handleSort} />
          <section className={styles.page}>
            <ul className={styles.container}>
              {this.state.movies.map((item, index) => (
                <Item
                  key={item.id}
                  item={item}
                  index={index}
                  size="500"
                  history={this.props.history}
                  location={this.props.location}
                />
              ))}
            </ul>
          </section>
        </Fragment>
      )
    );
  }
}

const GridHead = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 500px);
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 300px);
  justify-content: space-between;
  grid-row-gap: 2rem;
`;
