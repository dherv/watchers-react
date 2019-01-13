import React, { PureComponent } from "react";
import styled from "styled-components";
import IconMovie from "../icons/IconMovie";

interface IProps {
  size: string;
}
export default class Avatar extends PureComponent<IProps> {
  render() {
    return (
      <Wrapper size={this.props.size}>
        <IconMovie />
      </Wrapper>
    );
  }
}

const Wrapper = styled("div")<{ size: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181717;
  width: ${props => (props.size ? props.size : null)};
  height: ${props =>
    props.size ? (props.size === "500" ? "281px" : "169px") : null};
`;
