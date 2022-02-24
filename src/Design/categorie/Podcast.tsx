import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

export default function Podcast(): ReactElement {
  return (
    <div className="categories podcast">
      <FontAwesomeIcon icon={faMicrophone} />
      <Title>Podcast</Title>
    </div>
  );
}
