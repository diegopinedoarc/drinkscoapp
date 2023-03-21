import styled from "styled-components";
export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  margin-top: 2rem;
  height: auto;
  margin-bottom: 2rem;
  padding: 1rem;
  /* border: 1px solid black; */
  /* background-color: var(--negroheader); */
  @media only screen and (max-width: 624px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const BlogTitle = styled.h2`
  text-align: center;
  box-shadow: 2px 4px 12px 2px var(--negroheader);
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: white;
  font-size: 1.8rem;
  @media only screen and (max-width: 624px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
export const BlogSubTitle = styled.h3`
  text-align: center;
  box-shadow: 2px 4px 12px 2px var(--negroheader);
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-color: white;
  font-size: 3rem;
  @media only screen and (max-width: 624px) {
    font-size: 1.4rem;
  }
`;
export const ContainerRecetas = styled.div`
  width: 100%;
`;
export const ContainerTips = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const TipsInfo = styled.p``;
export const BarraList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  height: auto;
  width: 100%;
  /* list-style: none; */
  flex-direction: column;
  padding: 1rem;
`;
export const BarraItem = styled.li``;
export const BlogHeroImg = styled.img``;
export const BlogHeroContainer = styled.div`
  width: 100%;
  height: 24rem;
  background: url("https://res.cloudinary.com/dpxe6utid/image/upload/v1679410604/drinksCo/edgar-chaparro-Lwx-q6OdGAc-unsplash_mvtjat.jpg")
    no-repeat center;
  background-size: cover;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 624px) {
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
// export const ContrasteDiv = styled.div`
//   background-color: white;
//   opacity: 30%;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   align-items: center;
//   justify-content: center;
// `;
