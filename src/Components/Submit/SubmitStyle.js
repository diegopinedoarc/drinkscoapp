import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  color: var(--naranja2);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  background-color: var(--negroheader);
  box-shadow: 2px 4px 8px 2px var(--blanco);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: red;
  }
`;
