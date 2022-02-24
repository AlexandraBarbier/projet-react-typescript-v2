import react, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type CreditProps = {
  children: ReactNode;
};

export default function Author(props: CreditProps): ReactElement {
  return <p>{props.children}</p>;
}
