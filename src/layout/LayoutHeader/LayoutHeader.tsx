import React, { Component } from "react";
import LayoutNav from "../LayoutNav/LayoutNav";
import Logo from "../../components/Logo/Logo";
import styles from "./LayoutHeader.module.css";

export default class LayoutHeader extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Logo />
        <LayoutNav />
      </header>
    );
  }
}
