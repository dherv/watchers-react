import React, { PureComponent } from "react";
import styled from "styled-components";
import Nav from "./Nav";
export default class MainHeader extends PureComponent {
  render() {
    return (
      <Header>
        <Nav />
      </Header>
    );
  }
}

const Header = styled.header`
  height: 3rem;
  padding: 3rem;
  margin-bottom: 3rem;
  background-color: black;
`;
