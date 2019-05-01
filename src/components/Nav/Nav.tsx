import React, { SFC, MouseEvent, PureComponent } from "react";
import NavItem from "./components/NavItem";

const Nav: SFC<{
  items: string[];
  onClick(item: string): void;
}> = ({ items, onClick }) => (
  <nav>
    <ul>
      {items.map((item: string) => (
        <NavItem onClick={onClick} item={item} />
      ))}
    </ul>
  </nav>
);

export default Nav;
