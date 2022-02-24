import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { NavContainer, IconsContainer } from "../../../ui/BottomNav";

export default function User(): ReactElement {
  return (
    <>
      <IconsContainer>
        <FontAwesomeIcon icon={faUserAstronaut} />
      </IconsContainer>
    </>
  );
}
