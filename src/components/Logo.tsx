import React, { PureComponent } from "react";
import styled from "styled-components";

export default class LogoComponent extends PureComponent {
  render() {
    return <Logo>Watchers</Logo>;
  }
}

const Logo = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  padding: 8px 24px;
`;
