import React from "react";
import { DivDer, DivIzq, InfoSubHero, SubHeroWrapper } from "./SubHeroStyles";

const SubHero = () => {
  return (
    <SubHeroWrapper>
      <DivIzq>
        <InfoSubHero>Envios a todo el pais</InfoSubHero>
      </DivIzq>
      <DivDer>
        <InfoSubHero>3 Cuotas sin interes</InfoSubHero>
      </DivDer>
    </SubHeroWrapper>
  );
};

export default SubHero;
