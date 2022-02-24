import React, { ReactElement } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const FooterBottom = styled.footer`
  width: 100%;
  min-height: 10vh;
  background: var(--black-opacity);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default function Footer(): ReactElement {
  return (
    <FooterBottom>
      <Nav></Nav>
    </FooterBottom>
  );
}
