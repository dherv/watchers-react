import React, { PureComponent } from "react";
import styled from "styled-components";
import Nav from "./Nav";
export default class MainHeader extends PureComponent {
  // Declare a new state variable, which we'll call "count"
  //   const [count, setCount] = useState(0);
  render() {
    return (
      <Header>
        <Nav />
      </Header>
    );
  }
}

const Header = styled.header`
  height: 3rem;
  padding: 3rem;
  margin-bottom: 3rem;
  background-color: black;
`;
