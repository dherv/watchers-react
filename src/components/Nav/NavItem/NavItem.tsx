import React, { PureComponent } from "react";
import styles from "./NavItem.module.css";

interface IProps {
  text: string;
  value: string;
  onClick(item: string): void;
}
export default class NavItem extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick(this.props.value);
  }
  // link can not be used anymore without an href, use div with role menuitem instead to display text:
  //  https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
  render() {
    return (
      <li className={styles.item}>
        <div role="menuitem" className={styles.link} onClick={this.handleClick}>
          {this.props.text}
        </div>
      </li>
    );
  }
}
