import styled from "styled-components";

export const SlideContainer = styled.div`
  border: solid 1px white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  z-index: -3;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  /* border: solid 1px white; */
  width: 100%;
  height: 300px;
  z-index: -555;
`;

export const SlideTitle = styled.h2`
  font-size: 2.4rem;
  @media only screen and (max-width: 624px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const SlideInfo = styled.p`
  font-size: 1.2rem;
  @media only screen and (max-width: 624px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const SlideInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: auto;
  border: 1px solid white;
  background-color: white;
  opacity: 70%;
  color: black;
  padding: 2.2rem;
  text-align: center;
  gap: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 12px 2px var(--negroheader);

  @media only screen and (max-width: 624px) {
    width: 16rem;
    height: 14rem;
    justify-content: center;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const SliderButton = styled.button`
  width: 10rem;
  height: 2rem;
  padding: 5px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  background-color: #1b1a17;
  @media only screen and (max-width: 624px) {
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
