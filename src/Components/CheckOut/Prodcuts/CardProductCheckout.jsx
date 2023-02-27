import Increase from "../../Increase/Increase";
import Count from "../../Count/Count";
import { formatPrice } from "../../../utils/formatPrice";
import * as cartActions from "../../../redux/cart/cart-actions";
import { useDispatch } from "react-redux";

import React from "react";
import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  QuantityContainerStyled,
  TextStyled,
} from "./CardProductCheckoutStyle";
import { FaMinus } from "react-icons/fa";
import { TbShoppingCartX } from "react-icons/tb";
import { BsPlusLg } from "react-icons/bs";

const CardProductCheckout = ({ img, price, name, id, quantity, category }) => {
  const dispatch = useDispatch();
  return (
    <CardContainerStyled>
      <img src={img} alt={name} />
      <CardInfoStyled>
        <ProductTitleStyled> {name} </ProductTitleStyled>
        <TextStyled>{category}</TextStyled>
        <PriceStyled> {formatPrice(price)} </PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase onClick={() => dispatch(cartActions.removeFromCart(id))}>
          {quantity === 1 ? <TbShoppingCartX /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          onClick={() =>
            dispatch(cartActions.addToCart({ img, name, category, price, id }))
          }
        >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
