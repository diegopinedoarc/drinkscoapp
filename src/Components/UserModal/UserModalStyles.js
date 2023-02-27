import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background: #c02425; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f0cb35,
    #c02425
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f0cb35,
    #c02425
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.8);
  width: 450px;
  top: 7rem;
  right: 0;
  z-index: 98;
  border-radius: 0rem 0 1rem 1rem;
  padding: 2rem;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 98%;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }
  @media only screen and (max-width: 624px) {
    width: 75%;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 7.5rem;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;
export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
  position: relative;
  top: -1.5rem;
`;
export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
export const UsernameStyled = styled.h2`
  font-weight: 400;
  position: relative;
  top: -2rem;
`;
export const LinkStyled = styled(Link)`
  color: black;
  &:hover {
    opacity: 90%;
  }
`;
