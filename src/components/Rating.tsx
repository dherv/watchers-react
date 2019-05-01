import React, { PureComponent } from "react";
import styled from "styled-components";
import Circle from "../icons/IconCircle";

interface IProps {
  rating: number;
}
export default class Rating extends PureComponent<IProps> {
  render() {
    return (
      <Wrapper>
        <Circle>{this.props.rating}</Circle>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
