import React, { PureComponent, MouseEvent } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface IProps {}

export default class LayoutNav extends PureComponent<IProps> {
  render() {
    return (
      <Nav>
        <List>
          <Item>
            <Link
              activeStyle={{
                backgroundColor: "#121111",
                borderBottom: "4px solid #2a9d90"
              }}
              to="/movies"
            >
              movies
            </Link>
          </Item>
          <Item>
            <Link
              activeStyle={{
                backgroundColor: "#121111",
                borderBottom: "4px solid #2a9d90"
              }}
              to="/series"
            >
              series
            </Link>
          </Item>
          <Item>
            <Link to="/likes">likes</Link>
          </Item>
          <Item>
            <Link to="/watchlist">watchlist</Link>
          </Item>
          <Item>
            <Link to="/account">account</Link>
          </Item>
        </List>
      </Nav>
    );
  }
}
const Nav = styled.nav`
  margin: 0 4rem;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li``;
const Link = styled(NavLink)`
  display: block;
  height: 100%;
  padding: 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;
  border-bottom: 4px solid transparent;
  cursor: pointer;
  transition: all 0.3s linear;
`;
