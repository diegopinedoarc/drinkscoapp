import { AnimatePresence } from "framer-motion";
import React from "react";
import * as cartActions from "../../redux/cart/cart-actions";
import { formatPrice } from "../../utils/formatPrice";
import Increase from "../Increase/Increase";
import {
  ButtonContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  MainContainerStyled,
  ModalOverlayStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from "./CartModalStyle";
import { CgCloseR } from "react-icons/cg";
import { TbShoppingCartX } from "react-icons/tb";
import Submit from "../Submit/Submit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardCart from "./CardCart";
const CartModal = () => {
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(cartActions.toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(cartActions.toggleHiddenCart())}
              >
                <CgCloseR />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>
            <MainContainerStyled>
              <TitleStyled>
                <h3>Tu compra</h3>
                <Increase
                  onClick={() => dispatch(cartActions.clearCart())}
                  disabled={!cartItems.length}
                >
                  <TbShoppingCartX />
                </Increase>
              </TitleStyled>
              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map((item) => <CardCart key={item.id} {...item} />)
                ) : (
                  <p>No hay productos en el carro</p>
                )}
                <ButtonContainerStyled>
                  {" "}
                  <Submit
                    onClick={() => {
                      navigate("checkout");
                      dispatch(cartActions.toggleHiddenCart());
                    }}
                    disabled={!cartItems.length}
                  >
                    Iniciar compra
                  </Submit>
                </ButtonContainerStyled>
              </ProductsWrapperStyled>
            </MainContainerStyled>
            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>
                  {formatPrice(totalPrice + shippingCost)}
                </PriceStyled>
              </TotalStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartModal;
