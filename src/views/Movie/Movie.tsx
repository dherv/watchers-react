import React, { PureComponent } from "react";
import { IMovie, IMatch } from "../../types/interfaces";

interface IProps {
  match: IMatch;
}
interface IState {
  movie: IMovie | any;
  ready: boolean;
}
export default class Movie extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      movie: null,
      ready: false
    };
  }
  componentDidMount() {
    console.log(this.props);
    fetch(`http://localhost:8000/api/movies/${this.props.match.params.id}`)
      .then(response => response.json())
      .then((response: IMovie) =>
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
