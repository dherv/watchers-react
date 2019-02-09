import React, { PureComponent } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Logo from "../Logo";

// ---------------
interface IProps {}

export default class MainHeader extends PureComponent {
  render() {
    return (
      <Header>
        <Logo />
        <Nav />
      </Header>
    );
  }
}
// ---------------
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 4rem;
  margin-bottom: 0rem;
  background-color: #181717;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
