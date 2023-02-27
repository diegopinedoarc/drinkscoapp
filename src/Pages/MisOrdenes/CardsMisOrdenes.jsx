import React from "react";
import { MisOrdenesWrapper } from "./MisOrdenesStyle";
import CardOrdenes from "./CardOrdenes";
import Loader from "../../Components/Loader/Loader";
import { useSelector } from "react-redux";
const CardsMisOrdenes = () => {
  const { orders, loading, error } = useSelector((state) => state.orders);

  if (loading && !orders) {
    return <Loader styles={{ height: "50px", width: "50px" }} />;
  }

  if (error) {
    return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  }
  return (
    <MisOrdenesWrapper>
      {orders?.length ? (
        orders.map((order) => <CardOrdenes key={order.id} {...order} />)
      ) : (
        <h2 style={{ textAlign: "center" }}>
          ¡Que esperas para hacer tu primer pedido!
        </h2>
      )}
    </MisOrdenesWrapper>
  );
};

export default CardsMisOrdenes;
