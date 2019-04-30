import React, { PureComponent } from "react";
import styled from "styled-components";
import Header from "./LayoutHeader/LayoutHeader";

export default class LayoutPage extends PureComponent {
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
