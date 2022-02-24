import React, { ReactElement } from "react";
import styled from "styled-components";

export const CatSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 1rem;
`;

export const HeroSection = styled.section`
  margin: 2rem 1.2rem;
  border-radius: 0.5rem;
  max-width: 500px;
  height: 25vh;
  background: linear-gradient(
    to left,
    #23a6d5,
    #4a148c,
    #ff0066,
    #4a148c,
    #23a6d5
  );
  background-size: 400% 400%;
  animation: gradientTranisition 50s linear infinite;
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: flex-start;
  @keyframes gradientTranisition {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
`;
