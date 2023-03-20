import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import {
  MenuLabel,
  NavBackground,
  Icon,
  Navigation,
  List,
  ItemLink,
  SpanStyled,
  UserImageStyled,
  UserNavStyled,
  UserContainerStyled,
} from "./MenuStyle";
import { BiLogIn } from "react-icons/bi";
import * as userActions from "../../redux/user/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
const Menu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>
      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="contacto">
              Contacto
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="blog">
              Blog
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="login">
              <UserNavStyled>
                <UserContainerStyled
                  onClick={() =>
                    currentUser
                      ? dispatch(userActions.toggleMenuHidden())
                      : navigate("/login")
                  }
                >
                  <SpanStyled>
                    {currentUser
                      ? `${currentUser.displayName}`
                      : "Inicia Sesión"}
                  </SpanStyled>
                  {currentUser?.photoURL ? (
                    <UserImageStyled src={currentUser.photoURL} alt="Foto" />
                  ) : (
                    <BiLogIn style={{ color: "white" }} />
                  )}
                </UserContainerStyled>
              </UserNavStyled>
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
};

export default Menu;
