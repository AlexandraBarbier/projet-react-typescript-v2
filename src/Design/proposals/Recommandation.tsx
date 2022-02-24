import React, { ReactElement } from "react";
import styled from "styled-components";
import Title from "./Title";
import { MainSections } from "../../ui/Text";

const PopSection = styled.div`
  border-radius: 0.5rem;
  min-width: 460px;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PopContainer = styled.div`
  width: 130px;
  max-height: 90px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 150px;
  border-radius: 0.5em;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  opacity: 0.7;
  padding-top: 0.5rem;
`;
const InfosH3 = styled.h3`
  font-size: 0.8rem;
  font-weight: 300;
`;
const InfosH2 = styled.h2`
  font-size: 0.6rem;
  font-weight: 300;
`;

export default function Popular(): ReactElement {
  return (
    <MainSections>
      <Title>Recommandé pour vous</Title>
      <PopSection>
        <PopContainer>
          <Image
            src="https://images.unsplash.com/photo-1520012046139-d5cc1ee6f11c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="hip-hop artiste"
          />
          <Infos>
            <InfosH3>Zaworkzy</InfosH3>
            <InfosH2>Musique</InfosH2>
          </Infos>
        </PopContainer>
        <PopContainer>
          <Image
            src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
            alt="Télévision vintage"
          />
          <Infos>
            <InfosH3>La mode du vintage</InfosH3>
            <InfosH2>Podcast</InfosH2>
          </Infos>
        </PopContainer>
        <PopContainer>
          <Image
            src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80"
            alt="Ethereum"
          />
          <Infos>
            <InfosH3>Les cryptomonnaies</InfosH3>
            <InfosH2>Discussion</InfosH2>
          </Infos>
        </PopContainer>
      </PopSection>
    </MainSections>
  );
}
