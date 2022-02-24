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

export default function LastActivities(): ReactElement {
  return (
    <MainSections>
      <Title>Votre activité récente</Title>
      <PopSection>
        <PopContainer>
          <Image
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            alt="Tour Eiffel Paris"
          />
          <Infos>
            <InfosH3>Paris 2022</InfosH3>
            <InfosH2>Photos - Image</InfosH2>
          </Infos>
        </PopContainer>
        <PopContainer>
          <Image
            src="https://images.unsplash.com/photo-1483032469466-b937c425697b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Casque audio"
          />
          <Infos>
            <InfosH3>Chillout vibes</InfosH3>
            <InfosH2>Musique</InfosH2>
          </Infos>
        </PopContainer>
        <PopContainer>
          <Image
            src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Planete vue de haut"
          />
          <Infos>
            <InfosH3>L'histoire du net</InfosH3>
            <InfosH2>Podcast</InfosH2>
          </Infos>
        </PopContainer>
      </PopSection>
    </MainSections>
  );
}
