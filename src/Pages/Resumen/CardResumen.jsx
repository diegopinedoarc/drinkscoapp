import React from "react";
import { formatPrice } from "../../utils/formatPrice";

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from "./CardResumenStyles";

const CardResumen = ({ name, quantity, img, price }) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}</p>
        <ProductPriceStyled>{formatPrice(price)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
