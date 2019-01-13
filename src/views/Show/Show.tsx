import React, { PureComponent } from "react";
import { IMovie, IMatch, ILocation } from "../../types/interfaces";
import api from "../../api";

interface IProps {
  match: IMatch;
  location: ILocation;
}
interface IState {
  movie: IMovie | any;
  ready: boolean;
}
export default class Show extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      movie: null,
      ready: false
    };
  }
  componentDidMount() {
    api.fetchData(`${this.props.location.pathname}`).then((response: IMovie) =>
      this.setState({
        movie: response,
        ready: true
      })
    );
  }

  render() {
    return this.state.ready && <h1>{this.state.movie.title}</h1>;
  }
}
