import React from "react";
import Menu from "../Menu/Menu";
import {
  HeaderWrapper,
  MenusWrapper,
  SpanStyled,
  UserImageStyled,
  UserNavStyled,
  UserContainerStyled,
} from "./HeaderStyles";
import Logo from "../Logo/Logo";
import CartIcon from "../CartIcon/CartIcon";
import CartModal from "../CartModal/CartModal";
// import { motion } from "framer-motion";
import { BiLogIn } from "react-icons/bi";
import * as userActions from "../../redux/user/user-actions";
import UserModal from "../UserModal/UserModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <HeaderWrapper>
        <MenusWrapper>
          <Menu />
          <CartIcon />
          <CartModal />
          <UserModal />
          {/* <motion.div whileTap={{ scale: 0.92 }}> */}
          {/* <Link to="login"> */}
          <UserNavStyled>
            <UserContainerStyled
              onClick={() =>
                currentUser
                  ? dispatch(userActions.toggleMenuHidden())
                  : navigate("/login")
              }
            >
              <SpanStyled>
                {currentUser ? `${currentUser.displayName}` : "Inicia Sesión"}
              </SpanStyled>
              {currentUser?.photoURL ? (
                <UserImageStyled src={currentUser.photoURL} alt="Foto" />
              ) : (
                <BiLogIn style={{ color: "white" }} />
              )}
            </UserContainerStyled>
          </UserNavStyled>
          {/* </Link> */}
          {/* </motion.div> */}
        </MenusWrapper>
        <Link to={"/"}>
          <Logo />
        </Link>
      </HeaderWrapper>
    </>
  );
};

export default Header;
