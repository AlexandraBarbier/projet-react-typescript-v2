import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faUserAstronaut,
  faHouse,
  faIcons,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { NavContainer, IconsContainer } from "../../ui/BottomNav";
import User from "./user/User";

export default function Nav(): ReactElement {
  return (
    <NavContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faHouse} />
      </IconsContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faIcons} />
      </IconsContainer>
      <IconsContainer>
        <FontAwesomeIcon icon={faFolder} />
      </IconsContainer>
      <User></User>
    </NavContainer>
  );
}
