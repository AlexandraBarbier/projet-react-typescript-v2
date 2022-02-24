import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

export default function Post(): ReactElement {
  return (
    <div className="categories images">
      <FontAwesomeIcon icon={faCamera} />
      <Title>Publication</Title>
    </div>
  );
}
