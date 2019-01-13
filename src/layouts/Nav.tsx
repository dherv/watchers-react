import React, { PureComponent, MouseEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {}

export default class MainNav extends PureComponent<IProps> {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/movies">movies</Link>
          <Link to="/series">series</Link>
          <Link to="/likes">likes</Link>
          <Link to="/watchlist">watchlist</Link>
          <Link to="/account">account</Link>
        </ul>
      </nav>
    );
  }
}
