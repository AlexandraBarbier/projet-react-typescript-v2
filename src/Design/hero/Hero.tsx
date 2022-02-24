import React, { ReactElement } from "react";
import styled from "styled-components";
import { HeroSection } from "../../ui/Sections";

const TextContainer = styled.div`
  text-align: left;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  jutify-content: stretch;
`;

export default function Hero(): ReactElement {
  return (
    <HeroSection>
      <TextContainer>
        <h1>
          Bienvenue
          <br />
          sur l'application
        </h1>
        <p>Parcourir les médias</p>
      </TextContainer>
    </HeroSection>
  );
}
