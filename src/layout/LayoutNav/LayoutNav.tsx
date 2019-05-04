import React, { Component } from "react";
import styles from "./LayoutNav.module.css";
import LayoutNavLink from "../LayoutNavLink/LayoutNavLink";

export default class LayoutNav extends Component {
  render() {
    const links = [
      { text: "movies", value: "/movies" },
      { text: "series", value: "/series" },
      { text: "likes", value: "/likes" },
      { text: "watchlist", value: "/watchlist" },
      { text: "account", value: "/account" }
    ];
    return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map(link => (
            <li key={link.text}>
              <LayoutNavLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
