import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

export default function Music(): ReactElement {
  return (
    <div className="categories music">
      <FontAwesomeIcon icon={faMusic} />
      <Title>Musique</Title>
    </div>
  );
}
