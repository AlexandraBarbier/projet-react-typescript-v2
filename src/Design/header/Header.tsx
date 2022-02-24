import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Top = styled.header`
  min-width: 100vw;
  min-height: 10vh;
`;

export default function Header() {
  return (
    <Top>
      <Nav></Nav>
    </Top>
  );
}
