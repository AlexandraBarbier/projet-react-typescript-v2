import React, { ReactElement, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  height: 180px;
  background: #343434;
  border-radius: 0.5em;
  margin: 3rem;
  padding: 2.2rem 4.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
`;
const Btn = styled.button`
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
  color: var(--white);
  background: #474747;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
`;

export default function Counter(): ReactElement {
  const [count, SetCount] = useState<number>(0);

  const ajouter = () => SetCount(count + 1);
  const diminuer = () => SetCount(count - 1);

  return (
    <Container>
      <p>Le compteur est à {count}</p>
      <BtnContainer>
        <Btn onClick={ajouter}>+</Btn>
        <Btn onClick={diminuer}>-</Btn>
      </BtnContainer>
    </Container>
  );
}
