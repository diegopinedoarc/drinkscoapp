import styled from "styled-components";
import { motion } from "framer-motion";

export const IncreaseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 800;
  color: black;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media only screen and (max-width: 624px) {
    width: 30px;
    height: 30px;
    border-radius: 10px;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;
