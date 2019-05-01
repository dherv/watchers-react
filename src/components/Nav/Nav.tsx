import React, { SFC, MouseEvent, PureComponent } from "react";
import NavItem from "./components/NavItem";
import styles from "./Nav.module.css";

const Nav: SFC<{
  items: string[];
  onClick(item: string): void;
}> = ({ items, onClick }) => (
  <nav>
    <ul className={styles.list}>
      {items.map((item: string) => (
        <NavItem key={item} onClick={onClick} item={item} />
      ))}
    </ul>
  </nav>
);

export default Nav;
