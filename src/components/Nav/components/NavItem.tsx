import React, { PureComponent } from "react";
import styles from "./NavItem.module.css";

interface IProps {
  item: string;
  onClick(item: string): void;
}
export default class NavItem extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick(this.props.item);
  }
  render() {
    return (
      <li className={styles.item}>
        <a className={styles.link} onClick={this.handleClick}>
          {this.props.item}
        </a>
      </li>
    );
  }
}
