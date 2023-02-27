import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 85%;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media only screen and (max-width: 624px) {
    justify-content: center;
    align-items: center;
    width: 110%;
    scale: 90%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 240px;
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 2rem;
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;
`;
