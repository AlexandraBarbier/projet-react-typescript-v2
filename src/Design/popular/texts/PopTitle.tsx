import react, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type PopTitleProps = {
  children: ReactNode;
};

export default function PopTitle(props: PopTitleProps): ReactElement {
  return <h2>{props.children}</h2>;
}
