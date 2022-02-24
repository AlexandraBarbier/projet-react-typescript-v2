import React, { ReactElement } from "react";
import styled from "styled-components";

const PopularSections = styled.section`
  margin: 2rem 1.2rem;
  border-radius: 0.5rem;
  max-width: 500px;
  height: 25vh;
  background-color: pink;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url("https://www.numerama.com/wp-content/uploads/2021/11/dexter-new-blood-canla.jpg");
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

export default function PopularChat(): ReactElement {
  return (
    <PopularSections>
      <TextContainer>
        <h2>Discussion à la une</h2>
        <q>Dexter New Blood, t'en penses quoi ?</q>
        <p>Julie Dupont et 99+ autres personnes</p>
      </TextContainer>
    </PopularSections>
  );
}
