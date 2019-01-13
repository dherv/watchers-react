import React, { PureComponent } from "react";
import styled from "styled-components";

export default class MainLayout extends PureComponent {
  // Declare a new state variable, which we'll call "count"
  //   const [count, setCount] = useState(0);
  render() {
    return (
      <Page>
        <Header />
        <Main>{this.props.children}</Main>
      </Page>
    );
  }
}
const Page = styled.div`
  padding: 4rem;
`;
const Main = styled.main`
  margin: 0 auto;
`;
const Header = styled.header``;
