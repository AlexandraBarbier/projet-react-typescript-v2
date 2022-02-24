import React, { ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const PlayerInterface = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  background: #ffffff2c;
  padding: 1.3rem;
  border-radius: 0.5em;
`;

const BtnPlay = styled.button`
  outline: none;
  border: none;
  background: none;
  font-size: 2rem;
  color: var(--white);
  margin-bottom: 1rem;
`;

const PlayerTxt = styled.p`
  font-size: 0.7rem;
`;

export default function Player(): ReactElement {
  //Variable d'état
  const [isPlaying, SetIsPlaying] = useState(false);

  const changeIsPlaying = (): void => {
    // Changement d'état de la viriable (inverse)
    SetIsPlaying(!isPlaying);
  };

  return (
    <PlayerInterface>
      <BtnPlay onClick={changeIsPlaying}>
        <FontAwesomeIcon icon={faPlayCircle} />
      </BtnPlay>
      <PlayerTxt>
        {isPlaying ? "Je ne joue pas de musique" : "Je joue de la musique"}
      </PlayerTxt>
    </PlayerInterface>
  );
}
