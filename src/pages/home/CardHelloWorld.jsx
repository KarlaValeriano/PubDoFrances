import React from "react";
import { DivHello, Hello } from "../../components/sectionHello/BoxHello";

const CardHelloWorld = () => {
  return (
    <DivHello>
      <Hello>Hello World</Hello>
      <Hello secundary>Esta é uma pequena demonstracao</Hello>
    </DivHello>
  );
};

export default CardHelloWorld;
