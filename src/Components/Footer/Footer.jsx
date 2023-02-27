import React from "react";
import styled from "styled-components";
export const FooterWrapper = styled.header`
  height: 12vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border-radius: 0 0 0.6em 0.6rem; */
  background-color: var(--negroheader);
  -webkit-box-shadow: 0px 3px 3px var(--naranja2);
  -moz-box-shadow: 0px 3px 3px var(--naranja2);
  box-shadow: 0px 3px 3px var(--naranja2);
  border-top: 1px solid var(--naranja2);
  bottom: 0rem;
  z-index: 0;
`;
export const FooterInfo = styled.p`
  color: white;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInfo>Realizado por Diego Pinedo - 2023</FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
