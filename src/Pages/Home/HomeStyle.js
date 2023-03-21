import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 95vw;
  max-width: 1600px;
  padding: 0.8rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 0rem;
  border-radius: 0.4rem;

  h2 {
    font-weight: 400;
  }
  @media only screen and (max-width: 624px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    max-width: 100%;
  }
`;
export const ProdContainerRef = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
`;
export const DivVisit = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
  padding: 1rem;
  text-align: center;
  background: url("https://res.cloudinary.com/dpxe6utid/image/upload/v1679412060/drinksCo/banner-img-2_wwgj9a.jpg")
    no-repeat center;
  background-size: cover;
  border-radius: 0.4rem;
  gap: 0.5rem;

  box-shadow: 2px 4px 12px 2px var(--negroheader);
  font-size: 1.1rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
export const ButtonVisit = styled.button`
  width: 8rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.4rem;
  box-shadow: 2px 4px 12px 2px var(--negroheader);
  cursor: pointer;
  @media only screen and (max-width: 624px) {
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
export const VisitTitle = styled.h3`
  text-align: center;
  box-shadow: 2px 4px 12px 2px var(--negroheader);
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: white;
  font-size: 1.4rem;
  @media only screen and (max-width: 624px) {
    font-size: 1rem;
  }
`;
