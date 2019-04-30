import React, { PureComponent, MouseEvent } from "react";
import styled from "styled-components";

interface IProps {
  sort: (type: string) => void;
}

function Item(props: { children: string; onClick: (type: string) => void }) {
  function handleClick() {
    props.onClick(props.children);
  }
  return <li onClick={handleClick}>{props.children}</li>;
}

export default class Sort extends PureComponent<IProps> {
  render() {
    return (
      <nav>
        <ul>
          <Item onClick={this.props.sort}>date</Item>
          <Item onClick={this.props.sort}>rating</Item>
          <Item onClick={this.props.sort}>name</Item>
        </ul>
      </nav>
    );
  }
}
