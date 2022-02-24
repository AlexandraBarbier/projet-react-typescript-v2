import react, { ReactElement } from "react";
import styled from "styled-components";
import { YellowParagraph } from "../../ui/Text";

type HelloProps = {
  name: string;
  age?: number;
};

export default function Hello(props: HelloProps): ReactElement {
  const name = props.name;
  const age = props.age;

  if (!props.age) {
    return (
      <YellowParagraph>
        Bonjour {name}, je ne connais pas votre age
      </YellowParagraph>
    );
  } else {
    return (
      <YellowParagraph>
        Bonjour {name}, vous avez {age} ans
      </YellowParagraph>
    );
  }
}
