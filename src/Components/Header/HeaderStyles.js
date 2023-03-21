import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 7rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border-radius: 0 0 0.6em 0.6rem; */
  background-color: var(--negroheader);
  box-shadow: 2px 2px 6px 1px var(--naranja2);
  position: sticky;
  top: 0rem;
  z-index: 25;
`;

export const MenusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
`;
export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
`;

export const UserNavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  position: absolute;
  left: 10rem;
  top: 2.8rem;
  span {
    color: var(--naranja2);
    font-size: 1.2rem;
    margin-right: 20px;
  }
  @media only screen and (max-width: 624px) {
    display: none;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
    gap: 3rem;
  }
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const SpanStyled = styled.span`
  color: white;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 624px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
  color: white;
`;
