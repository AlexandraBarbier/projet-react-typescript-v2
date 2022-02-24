import React, { ChangeEvent, ReactElement, useState } from "react";
import { setTextRange } from "typescript";
import styled from "styled-components";
import { BigTitle } from "../ui/Text";

const UserContainer = styled.div`
  color: white;
  height: 260px;
  background: #343434;
  border-radius: 0.5em;
  margin: 3rem;
  padding: 2.2rem 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  background: #474747;
  color: #e0e0e0;
`;

export default function MyInput(): ReactElement {
  const INIT_VALUE = "";
  const [name, setName] = useState<string>(INIT_VALUE);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const INIT_AGE = "";
  const [age, setAge] = useState<string>(INIT_AGE);
  const hdlChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAge(e.target.value);
  };

  return (
    <UserContainer>
      <BigTitle>{name ? `Bonjour ${name}` : `Je ne vous connais pas`}</BigTitle>
      <Input type="text" value={name} onChange={handleChange} />
      <h2>{age ? `Vous avez ${age} ans` : `Je ne sais pas votre âge`}</h2>
      <Input type="number" value={age} onChange={hdlChange} />
    </UserContainer>
  );
}
