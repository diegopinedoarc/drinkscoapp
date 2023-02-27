import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo3 from "../../images/logo3.png";
export const LogoImg = styled(motion.img)`
  width: 8rem;
  border-radius: 0.4rem;
  /* box-shadow: 2px 4px 8px 2px var(--blanco); */
  /* opacity: 50%; */
  @media only screen and (max-width: 1024px) {
    color: wheat;
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 624px) {
    font-size: 1.8rem;
  }
`;
const Logo = () => {
  return <LogoImg src={logo3} alt="logo" whileTap={{ scale: 0.95 }} />;
};

export default Logo;
