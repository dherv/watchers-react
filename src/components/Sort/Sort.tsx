import React, { PureComponent, MouseEvent } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";

interface IProps {
  sort: (type: string) => void;
}

export default class Sort extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(item: string) {
    this.props.sort(item);
  }
  render() {
    return (
      <Nav items={["date", "rating", "name"]} onClick={this.handleClick} />
    );
  }
}
