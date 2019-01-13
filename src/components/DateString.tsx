import React, { PureComponent } from "react";
import styled from "styled-components";
import { formatDate } from "../helpers/date";

interface IProps {
  children: string;
}
export default class DateString extends PureComponent<IProps> {
  render() {
    const date = formatDate(this.props.children);
    return <Small>{date}</Small>;
  }
}

const Small = styled.small``;
