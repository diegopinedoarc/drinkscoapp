import React from "react";
import {
  Divisor,
  InfoWrapper,
  OfertaCardButton,
  OfertaCardContainer,
  OfertaCardImg,
  OfertaCardPrice,
  // OfertaCardTitle,
  OfertaCardTitle2,
  OfertaCardImg2,
} from "./CardOfertasStyle";
import { formatPrice } from "../../utils/formatPrice";
import * as cartActions from "../../redux/cart/cart-actions";
import { useDispatch } from "react-redux";

const CardOfertas = ({ img, name, price, info, id }) => {
  const dispatch = useDispatch();
  return (
    <OfertaCardContainer>
      <Divisor>
        {/* <OfertaCardTitle
          style={{ fontFamily: "var(--font4)", fontSize: "1.5rem" }}
        >
          {info}
        </OfertaCardTitle> */}
        <OfertaCardImg2
          src={
            "https://res.cloudinary.com/dpxe6utid/image/upload/v1677454489/drinksCo/sale202_a9ntlz.avif"
          }
        />
        <OfertaCardPrice>{formatPrice(price)}</OfertaCardPrice>
      </Divisor>
      <OfertaCardImg src={img} alt={name} />
      <InfoWrapper>
        <OfertaCardTitle2> {name} </OfertaCardTitle2>

        <OfertaCardButton
          onClick={() =>
            dispatch(cartActions.addToCart({ img, name, price, id }))
          }
          whileTap={{ scale: 0.9 }}
        >
          Agregar
        </OfertaCardButton>
      </InfoWrapper>
    </OfertaCardContainer>
  );
};

export default CardOfertas;
