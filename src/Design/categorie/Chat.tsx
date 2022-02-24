import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

export default function Chat(): ReactElement {
  return (
    <div className="categories chat">
      <FontAwesomeIcon icon={faMessage} />
      <Title>Discussion</Title>
    </div>
  );
}
