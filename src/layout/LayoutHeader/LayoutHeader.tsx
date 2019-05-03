import React, { Component } from "react";
import styled from "styled-components";
import LayoutNav from "../LayoutNav/LayoutNav";
import Logo from "../../components/Logo";

// ---------------
interface IProps {}

export default class LayoutHeader extends Component {
  render() {
    return (
      <Header>
        <Logo />
        <LayoutNav />
      </Header>
    );
  }
}
// ---------------
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 0rem;
  background-color: #181717;
  box-shadow: var(--shadow);
`;
