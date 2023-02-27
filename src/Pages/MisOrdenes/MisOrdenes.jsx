import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  MisOrdenesContainer,
  MisOrdenesTitle,
  MisOrdenesBtnContainer,
} from "./MisOrdenesStyle";
import Submit from "../../Components/Submit/Submit";
import CardsMisOrdenes from "./CardsMisOrdenes";
import * as ordersActions from "../../redux/ordenes/order-actions";
import {
  Divisor,
  BannerWrapper,
} from "../../Components/BannerDestacados/BannerDestacadosStyle";
const MisOrdenes = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, error } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      dispatch(ordersActions.getFullOrders(currentUser?.id));
    }

    if (!currentUser?.id) {
      dispatch(ordersActions.getOrdersFail());
    } else {
      error && dispatch(ordersActions.clearError());
    }
  }, [dispatch, currentUser?.id, orders, error]);
  return (
    <>
      <MisOrdenesContainer>
        <BannerWrapper>
          <Divisor></Divisor>
          <MisOrdenesTitle>Mis órdenes</MisOrdenesTitle>
          <Divisor></Divisor>
        </BannerWrapper>

        <CardsMisOrdenes />
        <MisOrdenesBtnContainer>
          <Submit onClick={() => navigate("/")}>Volver a comprar</Submit>
        </MisOrdenesBtnContainer>
      </MisOrdenesContainer>
    </>
  );
};

export default MisOrdenes;
