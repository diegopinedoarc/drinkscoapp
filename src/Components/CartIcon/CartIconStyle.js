import styled from "styled-components";
export const LinkContainerStyled = styled.div`
  font-size: 1.8rem;
  color: var(--naranja2);
  position: absolute;
  top: 2.5rem;
  left: 6rem;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    color: var(--naranja2);
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 624px) {
    font-size: 1.8rem;
  }
`;
export const SpanStyled = styled.span`
  font-size: 1.2rem;
  position: relative;
  top: 5px;
  left: -2px;
  color: white;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 30%;
  background: url(https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/cardbacknegro_xg0oac.jpg);
`;
