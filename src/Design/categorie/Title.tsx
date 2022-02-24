import react, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Categorie } from "../../ui/Text";

type TitleProps = {
  children: ReactNode;
};

export default function Title(props: TitleProps): ReactElement {
  return <Categorie>{props.children}</Categorie>;
}
