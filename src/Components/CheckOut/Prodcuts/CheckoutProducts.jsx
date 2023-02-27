import React from "react";
import {
  CardsWrapperStyled,
  EnvioStyled,
  HrStyled,
  PriceContainerStyled,
  PriceTotalStyled,
  ProductsContainerStyled,
  ProductsTitleStyled,
  SubtotalStyled,
  TotalStyled,
} from "./CheckoutProductsStyle";
import Link from "../../Link/Link";
import { formatPrice } from "../../../utils/formatPrice";
import CardProductCheckout from "./CardProductCheckout";

const CheckoutProducts = ({ cartItems, shippingCost, price }) => {
  return (
    <ProductsContainerStyled>
      <ProductsTitleStyled>Tu pedido:</ProductsTitleStyled>
      <CardsWrapperStyled>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CardProductCheckout key={item.id} {...item} />
          ))
        ) : (
          <>
            <p>¡Compra tus bebidas favoritas!</p>
            <Link />
          </>
        )}
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(price)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>
            {formatPrice(price + shippingCost)}
          </PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductsContainerStyled>
  );
};

export default CheckoutProducts;
