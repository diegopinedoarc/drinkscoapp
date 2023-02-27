import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#000000",
  // primaryLight: "#F1F6F9",
  secondaryLight: "var(--naranja2)",
  primaryLight: "var(--naranja2)",
};

export const MenuLabel = styled.label`
  background: url(https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/cardbacknegro_xg0oac.jpg);
  position: fixed;
  top: 2rem;
  left: 2rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  z-index: 100545454540;
  box-shadow: 0 1rem 3rem var(--naranja2);
  text-align: center;
  box-shadow: 1px 2px 6px 1px var(--blanco);
  opacity: 80%;
`;

export const NavBackground = styled.div`
  position: fixed;
  top: 2.5rem;
  left: 2.5rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
  z-index: 545;
`;

export const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 1.8rem;
  height: 2.4px;
  display: inline-block;
  transition: all 0.2s;
  margin-top: 1.4rem;
  &::before,
  &::after {
    content: "";
    background-color: grey;
    width: 1.2rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6500;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

export const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

export const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
`;

export const UserNavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  span {
    /* color: var(--naranja2); */
    /* font-size: 1.2rem; */
    /* margin-right: 20px; */
  }
  @media only screen and (max-width: 624px) {
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;
export const SpanStyled = styled.span`
  font-size: 3rem;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 624px) {
    font-size: 2rem;
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
