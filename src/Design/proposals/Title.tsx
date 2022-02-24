import react, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { BigTitle } from "../../ui/Text";

type TitleProps = {
  children: ReactNode;
};

export default function Title(props: TitleProps): ReactElement {
  return <BigTitle>{props.children}</BigTitle>;
}
