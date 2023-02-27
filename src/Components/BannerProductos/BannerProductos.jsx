import React from "react";
import { BannerTitle, BannerWrapper, Divisor } from "./BannerProductosStyle";

const BannerProductos = () => {
  return (
    <BannerWrapper>
      <Divisor></Divisor> <BannerTitle>Nuestros productos</BannerTitle>
      <Divisor></Divisor>
    </BannerWrapper>
  );
};

export default BannerProductos;
