import React from "react";
import { useNavigate } from "react-router-dom";
import {
  OrderCard,
  OrderId,
  OrderInfoContainer,
  OrderPrice,
  OrderTitle,
} from "./MisOrdenesStyle";
import { formatPrice } from "../../utils/formatPrice";
import { formatDate } from "../../utils/formatDate";
import { Timestamp } from "firebase/firestore";

const CardOrdenes = ({ createdAt, total, id }) => {
  const navigate = useNavigate();

  const createOrderAt = new Timestamp(
    createdAt.seconds,
    createdAt.nanoseconds
  ).toDate();
  console.log(createOrderAt);
  return (
    <OrderCard onClick={() => navigate(`/resumen/${id}`)}>
      <OrderInfoContainer>
        <OrderTitle>ID de la orden: #{id.slice(0, 7)}</OrderTitle>
        <OrderId>Fecha {formatDate(createOrderAt)}hs</OrderId>
        <OrderPrice>{formatPrice(total)}</OrderPrice>
      </OrderInfoContainer>
    </OrderCard>
  );
};

export default CardOrdenes;
