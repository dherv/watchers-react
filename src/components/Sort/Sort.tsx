import React, { PureComponent } from "react";
import Nav from "../nav/Nav/Nav";

interface IProps {
  sort: (type: string) => void;
}

export default class Sort extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(item: string) {
    this.props.sort(item);
  }
  render() {
    const items = [
      { text: "date", value: "release_date" },
      { text: "name", value: "title" },
      { text: "rating", value: "rating" }
    ];
    return <Nav items={items} onClick={this.handleClick} />;
  }
}
