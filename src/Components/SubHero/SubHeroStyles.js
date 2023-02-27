import styled from "styled-components";

export const SubHeroWrapper = styled.div`
  margin-top: -1.5rem;
  width: 100%;
  display: flex;
  height: 6rem;
  /* border-bottom: solid 1px var(--naranja2); */
  /* border-top: solid 1px var(--naranja2); */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  padding: 0.5rem;
  @media only screen and (max-width: 624px) {
    gap: 1rem;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    /* gap: 3rem; */
  }
`;
export const DivIzq = styled.div`
  border-right: 1px var(--naranja2) solid;
  border-left: 1px var(--naranja2) solid;
  height: 4rem;
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DivDer = styled.div`
  border-left: 1px var(--naranja2) solid;
  border-right: 1px var(--naranja2) solid;
  height: 4rem;
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoSubHero = styled.p`
  color: black;
  text-align: center;
`;
