import React, { PureComponent } from "react";
import styled from "styled-components";
import Header from "./Header/Header";

export default class MainLayout extends PureComponent {
  render() {
    return (
      <Page>
        <Header />
        <Main>{this.props.children}</Main>
      </Page>
    );
  }
}
const Page = styled.div``;
const Main = styled.main`
  padding: 4rem;
`;
