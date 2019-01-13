import React, { Component, Fragment } from "react";
import Item from "./Item/Item";
import styled from "styled-components";
import { IHistory, IMovie, ILocation } from "../../types/interfaces";
import Main from "../../layouts/Main";
import api from "../../api";
import { sortByDate, sortByNumber, sortByString } from "../../helpers/filters";
import Nav from "./Nav";
interface IProps {
  history: IHistory;
  location: ILocation;
}

interface IState {
  movies: IMovie[];
  ready: boolean;
  type: string;
  sort: boolean;
}

export default class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      movies: [],
      type: "date",
      sort: false,
      ready: false
    };
    this.handleSort = this.handleSort.bind(this);
  }
  componentDidMount() {
    api.fetchData(`${this.props.location.pathname}`).then(data => {
      const movies = sortByDate(data, "release_date", "asc");
      this.setState({ movies, ready: true });
    });
  }

  handleSort(type: string) {
    console.log(type);
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
    const top = this.state.movies.slice(0, 3);
    const rest = this.state.movies.slice(3);
    return (
      this.state.ready && (
        <Fragment>
          <Nav sort={this.handleSort} />
          <GridHead>
            {top.map((item, index) => (
              <Item
                key={item.id}
                item={item}
                index={index}
                size="500"
                history={this.props.history}
                location={this.props.location}
              />
            ))}
          </GridHead>
          <Grid className="wrapper">
            {rest.map((item, index) => (
              <Item
                key={item.id}
                item={item}
                index={index}
                size="300"
                history={this.props.history}
                location={this.props.location}
              />
            ))}
          </Grid>
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
