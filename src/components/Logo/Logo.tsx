import React, { PureComponent } from "react";
import styles from "./Logo.module.css";

export default class Logo extends PureComponent {
  render() {
    return <h2 className={styles.logo}>Watchers</h2>;
  }
}
