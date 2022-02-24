import React, { ReactElement } from "react";
import styled from "styled-components";
import Author from "./Title";
import PopTitle from "./PopTitle";

const TxtContainer = styled.div`
  text-align: left;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  jutify-content: stretch;
`;

export default function TextContainer(): ReactElement {
  return (
    <TxtContainer>
      <PopTitle>Podcast à la une</PopTitle>
      <p>Partir à l'étranger quand on télétravail</p>
      <Author>Zoé et Martin</Author>
    </TxtContainer>
  );
}
