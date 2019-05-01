import React, { PureComponent, Fragment } from "react";
import { IData, ILocation } from "../../types/interfaces";
import styled from "styled-components";
import Api from "../../Api/Api";

interface IProps {
  size: string;
  match: IData;
  location: ILocation;
}
interface IState {
  item: IData | any;
  ready: boolean;
}
export default class MoviePage extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      item: null,
      ready: false
    };
    this.fetchMedia = this.fetchMedia.bind(this);
  }
  componentDidMount() {
    this.fetchMedia();
  }

  fetchMedia() {
    const path = this.props.location.pathname;
    const url = path.substring(1, path.length);
    Api.get(url).then((data: IData) =>
      this.setState({
        item: data,
        ready: true
      })
    );
  }

  render() {
    const { item } = this.state;
    const image =
      item && item.backdrop_path
        ? item.backdrop_path.replace("@size", `original`)
        : null;
    return (
      this.state.ready && (
        <Grid>
          <img src={image} />
          <Wrapper>
            <h1>{this.state.item.title}</h1>
            <div>
              <img
                src={this.state.item.poster_path.replace("@size", `original`)}
              />
              <h5>{this.state.item.release_date}</h5>
            </div>
            <p>{this.state.item.description}</p>
          </Wrapper>
        </Grid>
      )
    );
  }
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const Wrapper = styled.article`
  padding: 2rem;
  background-color: #121111;
  h1 {
    padding: 1rem 0;
    border-bottom: 1px solid #473a3a;
    font-weight: 300;
  }

  div {
    display: flex
    align-items: flex-start;
    margin: 2rem 0;
  }
  img {
    display: inline-block;
  
    max-width: 40%;
    height: auto;
    display: block;
  }
  h5 {
    display: inline-block;
    width: 50%;
  }
  p {
    padding: 2rem 0;
  }
`;
