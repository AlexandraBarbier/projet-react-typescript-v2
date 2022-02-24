import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Music from "./Music";
import Post from "./Post";
import Podcast from "./Podcast";
import Chat from "./Chat";

const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 1rem;
`;

export default function CatCardsContainer(): ReactElement {
  return (
    <CardsContainer>
      <Music></Music>
      <Post></Post>
      <Podcast></Podcast>
      <Chat></Chat>
    </CardsContainer>
  );
}
