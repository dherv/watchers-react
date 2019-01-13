import React, { PureComponent, Fragment } from "react";
import { IData, ILocation } from "../../../types/interfaces";
import api from "../../../api";
import styled from "styled-components";

interface IProps {
  size: string;
  match: IData;
  location: ILocation;
}
interface IState {
  item: IData | any;
  ready: boolean;
}
export default class Show extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      item: null,
      ready: false
    };
  }
  componentDidMount() {
    api.fetchData(`${this.props.location.pathname}`).then((data: IData) =>
      this.setState({
        item: data,
        ready: true
      })
    );
  }

  render() {
    const { item } = this.state;
    const image =
      item && item.image_path
        ? item.image_path.replace("@size", `original`)
        : null;
    return (
      this.state.ready && (
        <Grid>
          <img src={image} />
          <Wrapper>
            <h1>{this.state.item.title}</h1>
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
`;
