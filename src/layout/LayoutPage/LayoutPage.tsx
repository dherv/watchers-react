import React, { Component } from "react";
import LayoutHeader from "../LayoutHeader/LayoutHeader";
import styles from "./LayoutPage.module.css";

export default class LayoutPage extends Component {
  render() {
    return (
      <div>
        <LayoutHeader />
        <main className={styles.main}>{this.props.children}</main>
      </div>
    );
  }
}
