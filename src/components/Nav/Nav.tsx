import React, { SFC } from "react";
import NavItem from "./components/NavItem";
import styles from "./Nav.module.css";
import { ISort } from "../../types/interfaces";

const Nav: SFC<{
  items: ISort[];
  onClick(item: string): void;
}> = ({ items, onClick }) => (
  <nav>
    <ul className={styles.list}>
      {items.map((item: ISort) => (
        <NavItem
          key={item.value}
          onClick={onClick}
          text={item.text}
          value={item.value}
        />
      ))}
    </ul>
  </nav>
);

export default Nav;
