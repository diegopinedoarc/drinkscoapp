import styled from "styled-components";
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  gap: 1rem;
  border-bottom: solid 3px var(--naranja2);
  margin-bottom: 2rem;
`;
export const CardImg = styled.img`
  width: 20rem;
  border-radius: 0.5rem;
  border: solid 1px var(--naranja);
`;
export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  width: 80%;
`;
export const CardTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
`;
export const CardInfo = styled.p`
  font-size: 1.2rem;
`;
export const ItemContainer = styled.div`
  background-color: var(--naranja);
  padding: 0.5rem;
  border-radius: 0.3rem;
`;
export const CardItemsList = styled.ul``;
export const CardItems = styled.li``;
export const CardDivisor = styled.div`
  display: flex;
  gap: 1rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
