import styled from "styled-components";
import { motion } from "framer-motion";

export const OfertaCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 14rem;
  height: 16rem;
  /* border: solid 1px black; */
  padding: 1rem;
  background-color: var(--blancotransp);
  border-radius: 1rem 1rem 0rem 1rem;
  box-shadow: 1px 2px 12px 2px var(--negroheader);
  &:hover {
    /* background-color: black; */
    box-shadow: 1px 2px 12px 2px var(--naranja);
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    /* flex-direction: column; */
    scale: 90%;
  }
`;
export const Divisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  padding: 0rem;
`;
export const OfertaCardImg = styled.img`
  width: 4rem;
  height: 5rem;
  border-radius: 0.2rem;
  position: relative;
  top: -1.8rem;
  filter: drop-shadow(4px 4px 8px var(--negroheader));
`;
export const OfertaCardTitle2 = styled.h4`
  font-size: 0.9rem;
  color: var(--negroheader);
  text-align: center;
`;
export const OfertaCardTitle = styled.h4`
  font-size: 0.9rem;
  color: var(--negroheader);
  text-align: center;
  position: relative;
  top: 0rem;
`;
export const OfertaCardPrice = styled.h2`
  font-size: 1.4rem;
  position: relative;
  top: -2.5rem;
`;

export const OfertaCardButton = styled(motion.button)`
  margin-top: 0.5rem;
  width: 8rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  outline: none;
  border: none;
  background-color: var(--negroheader);
  color: rgb(234, 226, 183);
  font-weight: bold;
  cursor: pointer;

  &:hover {
    /* background-color: black; */
    /* box-shadow: 1px 2px 6px 2px var(--naranja2); */
  }
`;
export const OfertaCardImg2 = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.2rem;
  position: relative;
  top: -1.5rem;
  left: 6rem;
`;
