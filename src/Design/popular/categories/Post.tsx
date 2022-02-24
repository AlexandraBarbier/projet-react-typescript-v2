import React, { ReactElement } from "react";
import styled from "styled-components";

const PopularSections = styled.section`
  margin: 2rem 1.2rem;
  border-radius: 0.5rem;
  max-width: 500px;
  height: 25vh;
  background-color: pink;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: flex-start;
`;

const TextContainer = styled.div`
  text-align: left;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  jutify-content: stretch;
`;

export default function Post(): ReactElement {
  return (
    <PopularSections>
      <TextContainer>
        <h2>Image à la une</h2>
        <p>Sam a posté cette photo il y a 4h</p>
        <p>3568 personnes ont aimé</p>
      </TextContainer>
    </PopularSections>
  );
}
