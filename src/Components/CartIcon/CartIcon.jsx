import React from "react";
import { LinkContainerStyled, SpanStyled } from "./CartIconStyle";
import { ImCart } from "react-icons/im";
import * as cartActions from "../../redux/cart/cart-actions";
import { useDispatch, useSelector } from "react-redux";
const CartIcon = () => {
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const dispatch = useDispatch();
  return (
    <LinkContainerStyled
      onClick={() => dispatch(cartActions.toggleHiddenCart())}
    >
      <ImCart />
      <SpanStyled>{totalCartItems}</SpanStyled>
    </LinkContainerStyled>
  );
};

export default CartIcon;
