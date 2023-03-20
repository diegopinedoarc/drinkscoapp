import React from "react";
import {
  CardDivisor,
  CardImg,
  CardInfo,
  CardInfoContainer,
  CardItemsList,
  CardTitle,
  CardWrapper,
  ItemContainer,
} from "./CardRecetasStyle";

const CardRecetas = ({
  name,
  description,
  info,
  img,
  recetaNumber,
  productos,
}) => {
  return (
    <CardWrapper>
      <CardTitle> {name} </CardTitle>
      <CardDivisor>
        <CardImg src={img} />
        <CardInfoContainer>
          <CardInfo> {description} </CardInfo>
          <CardInfo> {info} </CardInfo>
        </CardInfoContainer>
      </CardDivisor>
      <ItemContainer>
        <CardItemsList> {productos} </CardItemsList>
      </ItemContainer>
    </CardWrapper>
  );
};

export default CardRecetas;
