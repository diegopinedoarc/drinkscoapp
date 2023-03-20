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
`;
export const BlogSubTitle = styled.h3`
  text-align: center;
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
