import React, { Component } from "react";
import styled from "styled-components";
import LayoutHeader from "./LayoutHeader/LayoutHeader";

export default class LayoutPage extends Component {
  render() {
    return (
      <Page>
        <LayoutHeader />
        <Main>{this.props.children}</Main>
      </Page>
    );
  }
}
const Page = styled.div``;
const Main = styled.main`
  padding: 1rem;
`;
