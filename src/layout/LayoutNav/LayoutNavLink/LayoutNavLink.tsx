import React, { SFC } from "react";
import { NavLink } from "react-router-dom";
import { INavLink } from "../../../types/interfaces";
import styles from "../LayoutNav.module.css";

const LayoutNavLink: SFC<{ link: INavLink }> = ({ link: { text, value } }) => (
  <NavLink
    to={value}
    exact
    className={styles.link}
    activeStyle={{
      backgroundColor: "#121111",
      borderBottom: "4px solid #2a9d90"
    }}
  >
    {text}
  </NavLink>
);

export default LayoutNavLink;
