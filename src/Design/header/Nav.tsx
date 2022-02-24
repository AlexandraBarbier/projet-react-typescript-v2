import React from "react";
import styled from "styled-components";
import Hello from "./Hello";
import { faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavContainer = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0 1.2rem;
`;

const TopNav = styled.div`
  min-height: 100%;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: var(--white);
  font-size: 1rem;
`;

export default function Nav() {
  return (
    <NavContainer>
      <Hello name="Alex" age={28}></Hello>
      <TopNav>
        <FontAwesomeIcon className="icons" icon={faBell} />
        <FontAwesomeIcon className="icons" icon={faCog} />
      </TopNav>
    </NavContainer>
  );
}
