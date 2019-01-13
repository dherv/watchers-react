import React, { PureComponent, MouseEvent } from "react";
import styled from "styled-components";

interface IProps {}

export default class MainNav extends PureComponent<IProps> {
  render() {
    return (
      <nav>
        <ul>
          <li>home</li>
          <li>movies</li>
          <li>series</li>
          <li>likes</li>
          <li>watchlis</li>
          <li>account</li>
        </ul>
      </nav>
    );
  }
}
