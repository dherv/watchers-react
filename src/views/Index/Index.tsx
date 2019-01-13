import React, { Component } from "react";
import Item from "./Item/Item";
import styled from "styled-components";
import { IHistory, IMovie, ILocation } from "../../types/interfaces";
import Main from "../../layouts/Main";
import api from "../../api";

interface IProps {
  history: IHistory;
  location: ILocation;
}

interface IState {
  movies: IMovie[];
  ready: boolean;
}

export default class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      movies: [],
      ready: false
    };
  }
  componentDidMount() {
    api.fetchData(`${this.props.location.pathname}`).then(data => {
      const movies = this.sortByDate(data);
      this.setState({ movies, ready: true });
    });
  }
  sortByDate(data: IMovie[]) {
    return data.sort(
      (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
    );
  }
  render() {
    // need to separate top and the rest to display the grid correctly
    const top = this.state.movies.slice(0, 3);
    const rest = this.state.movies.slice(3);
    return (
      this.state.ready && (
        <Main>
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
        </Main>
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